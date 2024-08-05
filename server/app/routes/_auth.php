<?php

require __DIR__ . "/../../vendor/autoload.php";
require __DIR__ . "/../helpers/log.php";

use Leaf\Helpers\Authentication;

app()->cors(['origin' => '*']);
db()->autoConnect();
auth()->autoConnect();

app()->post('/auth/login', function () {
    $email = request()->get('email');
    $password = request()->get('password');

    $data = auth()->login(['email' => $email, 'password' => $password]);

    if ($data) {
        $token = $data['token'];
        response()->json(['token' => $token]);
    } else {
        $errors = auth()->errors();
        response()->json(['message' => $errors['password'] ?? 'Invalid password', 'email' => $email], 401);
    }
});

app()->post('/auth/verify-token', function () {
    $tokenSecret = env("JWT_SECRET");
    $data = Authentication::validateToken($tokenSecret);
    if ($data) {
        response()->json(['data' => $data]);
    } else {
        response()->json(['message' => 'Invalid token'], 401);
    }
});
