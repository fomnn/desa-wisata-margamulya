<?php

require __DIR__ . "/../../vendor/autoload.php";

// app()->config('debug', false);
app()->cors();
db()->autoConnect();
auth()->autoConnect();

use Leaf\FS;

app()->get('/', function () {
    response()->json(['message' => 'Congrats!! You\'re on Leaf API']);
});
app()->get('/tes', function () {
    $tes = FS::readFile(StoragePath('/app/public/logo-innovillage.png'));
    response()->plain($tes);
});

