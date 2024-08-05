<?php

require __DIR__ . "/../../vendor/autoload.php";

db()->autoConnect();
app()->cors();

app()->get('/trip-packages', function () {
    $tripId = request()->get('id');
    if ($tripId) {
        $detailTrip = db()->select('trip_packages', "id, title, price")->where('id', $tripId)->first();
        return response()->json($detailTrip);
    }
    $tripList = db()->select('trip_packages')->all();
    response()->json($tripList);
});

app()->put('/trip-packages/{tripId}', function (int $tripId) {
    $title = request()->get('title');
    $price = request()->get('price');

    db()->update('trip_packages')->params([
        'title' => $title,
        'price' => $price,
    ])->where('id', $tripId)->execute();

    return response()->plain('Trip updated✅');
});

app()->get('/trip-packages/facilities', function () {
    $tripList = db()->select('trip_facilities')->orderBy("id")->all();
    response()->json($tripList);
});

app()->get('/trip-packages/{tripId}/facilities', function (int $tripId) {
    $tripList = db()->select('trip_facilities')->where('trip_package_id', $tripId)->orderBy("id")->all();
    response()->json($tripList);
});

app()->post('/trip-packages/{tripId}/facilities', function (int $tripId) {
    $facility = request()->get('facility');
    $order = request()->get('order');

    try {
        db()
            ->insert('trip_facilities')
            ->params([
                'facility' => $facility,
                'trip_package_id' => $tripId,
                '`order`' => $order,
            ])
            ->execute();
        // db()
        //     ->query('insert into trip_facilities (facility, trip_package_id, `order`) values(?, ?, ?)')
        //     ->bind($facility, $tripId, $order)
        //     ->execute();
    } catch (Exception $e) {
        response()->json(['message' => $e->getMessage()], 500);
        return;
    }
    // db()
    //     ->insert('trip_facilities')
    //     ->params([
    //         'facility' => $facility,
    //         'trip_package_id' => $tripId,
    //         'order' => $order,
    //     ])
    //     ->execute();

    return response()->plain('Facility added✅');
});

app()->delete('/trip-packages/facilities/{facilityId}', function (int $facilityId) {

    db()->query('delete from trip_facilities where id = ?')->bind($facilityId)->execute();

    return response()->plain('Facility deleted✅');

});
