/* * * Auth * * */
can.route('passwordemail/:email',{page: 'passwordemail'});
can.route('passwordchange/:secret',{page: 'passwordchange'});
can.route('verify/:secret',{page: 'verify'});
// can.route(':page',{page: 'overview'});


/* * * Overview * * */
can.route('', {'page':'server'});
can.route('settings', {'page':'settings'});
can.route('help', {'page':'help'});

can.route(':db_name', {'page':'database'});
can.route(':db_name/:col_name', {'page':'collection'});
can.route(':db_name/:col_name/:doc_id', {'page':'document'});

