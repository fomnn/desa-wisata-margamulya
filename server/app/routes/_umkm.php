<?php

require __DIR__ . "/../../vendor/autoload.php";

use Leaf\FS;

db()->autoConnect();
app()->cors();

app()->get('/umkm', function () {
  $umkmId = request()->get('umkmId');
  if ($umkmId) {
    $detailUmkm = db()->select('umkm', "id, title, description")->where('id', $umkmId)->first();
    return response()->json($detailUmkm);
  }
  $umkmList = db()->select('umkm', "id, title, description")->all();
  response()->json($umkmList);
});

// app()->get('/umkm/{umkmId}', function (int $umkmId) {
//     $detailUmkm = db()->select('umkm', "id, title, description")->where('id', $umkmId)->first();
//     return response()->json($detailUmkm);
// });

app()->post('/umkm', function () {
  $title = request()->get('title');
  $description = request()->get('description');
  $cardImageFile = request()->get('cardImageFile');
  $cardImageName = request()->get('cardImageName');
  $heroImageFile = request()->get('heroImageFile');
  $heroImageName = request()->get('heroImageName');

  try {
    db()
      ->insert('umkm')
      ->params([
        'title' => $title,
        'description' => $description
      ])
      ->execute();

    $umkmId = db()->lastInsertId();
  } catch (Exception $e) {
    response()->json(['messagennn' => $e->getMessage()], 500);
    return;
  }

  try {
    FS::uploadFile($cardImageFile, StoragePath("/app/public/img/umkm/card/"));
    FS::renameFile(StoragePath("/app/public/img/umkm/card/" . $cardImageName), StoragePath('/app/public/img/umkm/card/' . $umkmId . ".png"));

    FS::uploadFile($heroImageFile, StoragePath("/app/public/img/umkm/hero/"));
    FS::renameFile(StoragePath("/app/public/img/umkm/hero/" . $heroImageName), StoragePath('/app/public/img/umkm/hero/' . $umkmId . ".png"));
  } catch (Exception $e) {
    response()->json(['messagefdsf' => $e->getMessage()], 500);
    return;
  }

  response()->json(['message' => 'success', 'umkmId' => $umkmId]);
});

app()->delete('/umkm/{umkmId}', function (int $umkmId) {
  try {
    db()->delete('umkm_explanation')->where('umkm_id', $umkmId)->execute();
    db()->delete('umkm')->where('id', $umkmId)->execute();
  } catch (Exception $e) {
    response()->json(['message' => $e->getMessage()], 500);
    return;
  }

  response()->plain('delete success✅');
});

app()->get('/umkm/image/{type}/{umkmId}', function (string $type, string $umkmId) {
  // TODO: change pattern to /umkm/{umkmId}/image/card
  $img = FS::readFile(StoragePath("/app/public/img/umkm/" . $type . "/" . $umkmId . ".png"));
  response()->plain($img);
});

app()->post('/umkm/{umkmId}/explanation', function (int $umkmId) {
  $title = request()->get('title');
  $description = request()->get('description');
  $imageFile = request()->get('imageFile');
  $imageName = request()->get('imageName');
  // TODO: save data to db
  // TODO: save image to storage

  try {
    db()->insert('umkm_explanation')
      ->params([
        'umkm_id' => $umkmId,
        'title' => $title,
        'description' => $description,
      ])
      ->execute();
    $umkmExplanationId = db()->lastInsertId();
  } catch (Exception $e) {
    response()->json(['messagefdsf' => $e->getMessage()], 500);
    return;
  }

  try {
    FS::uploadFile($imageFile, StoragePath("/app/public/img/umkm/explanations/"));
    FS::renameFile(StoragePath("/app/public/img/umkm/explanations/" . $imageName), StoragePath('/app/public/img/umkm/explanations/' . $umkmExplanationId . ".png"));
  } catch (Exception $e) {
    response()->json(['messagefdsf' => $e->getMessage()], 500);
    return;
  }

  response()->json(['message' => 'success', 'umkmExplanationId' => $umkmExplanationId]);
});

app()->get('/umkm/{umkmId}/explanation', function (int $umkmId) {
  $explanationList = db()->select('umkm_explanation', "id, title, description")->where('umkm_id', $umkmId)->all();
  return response()->json($explanationList);
});

app()->get('/umkm/explanation/image/{umkmExplanationId}', function (int $umkmExplanationId) {
  $img = FS::readFile(StoragePath("/app/public/img/umkm/explanations/" . $umkmExplanationId . ".png"));
  return response()->plain($img);
});
