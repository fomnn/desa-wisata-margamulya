<?php

require __DIR__ . "/../../vendor/autoload.php";

db()->autoConnect();
app()->cors();

app()->get('/tourism-education', function () {
    $tripList = db()->select('tourism_education')->all();
    response()->json($tripList);
});

app()->post('/tourism-education', function () {
    $title = request()->get('title');
    $description = request()->get('description');
    $image = request()->get('image');

    try {
        db()
            ->insert('tourism_education')
            ->params([
                'title' => $title,
                'description' => $description,
            ])
            ->execute();
    } catch (Exception $e) {
        response()->json(['message' => $e->getMessage()], 500);
        return;
    }

    return response()->plain('Tourism Education created✅');
});

app()->patch('/tourism-education/{tourismEducationId}', function (int $tourismEducationId) {
    $title = request()->get('title');
    $description = request()->get('description');
    $image = request()->get('image');

    db()->update('tourism_education')->params([
        'title' => $title,
        'description' => $description,
    ])->where('id', $tourismEducationId)->execute();

    return response()->plain('Tourism Education updated✅');
});

