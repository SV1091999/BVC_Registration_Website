var express = require('express');
var app = express();
const port = process.env.PORT || 5001;
const cors = require('cors');
const fs = require('fs');
const _ = require('underscore');

app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));


//******/ config for your database
var sql = require("mssql");
var config = {
    user: 'sa', // update
    password: 'sa123', //update
    server: 'DESKTOP-DS5B0F9',
    driver: 'msnodesqlv8',
    port: 1433,
    options: {
        // If you are on Microsoft Azure, you need encryption:
        TrustServerCertificate: true,
        database: 'Workspace',  //update
        instanceName: 'SQLEXPRESS', //update
        encrypt: false,
        useUTC: true,
    },

    pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 3600000,
    },
};

///********/

app.get('/', function (req, res) {

    // var sql = require("mssql");

    // // config for your database
    // var config = {
    //     user: 'sa', // update
    //     password: 'sa123', //update
    //     server: 'DESKTOP-DS5B0F9',
    //     driver: 'msnodesqlv8',
    //     port:1433,
    //     options: {
    //         // If you are on Microsoft Azure, you need encryption:
    //         TrustServerCertificate : true,
    //         database: 'Workspace',  //update
    //         instanceName: 'SQLEXPRESS', //update
    //         encrypt: false,
    //         useUTC: true,
    //     },

    //     pool: {
    //         max: 100,
    //         min: 0,
    //         idleTimeoutMillis: 3600000,
    //       },
    // };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from [Final_Project_Web].[dbo].[SignUp]', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });


   
});

app.get('/registered', function (req, res) {

   
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from [Final_Project_Web].[dbo].[Register]', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});



app.get('/Contact', function (req, res) {

   
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from [Final_Project_Web].[dbo].[Contact]', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });


   
});



app.post('/login', (req, res) => {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();


        // query to the database and get the records
        request.query(`Select * from [Final_Project_Web].[dbo].SignUp where Username =
         '`+ req.body[0].Username + `' and Password = '` + req.body[0].Password + `'`, function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordsets);
            // console.log(recordset[1]);


        });
    });
});


app.post('/SignUp', (req, res) => {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();


        // query to the database and get the records
        request.query(`INSERT INTO [Final_Project_Web].[dbo].[SignUp]
        ([Firstname]
        ,[Lastname]
        ,[Email]
        ,[Phone_Number]
        ,[DOB]
        ,[Department]
        ,[Username]
        ,[Password]
        ,[Studentid])
  VALUES
        ('` + req.body.firstname + "','"
            + req.body.lastname + "','"
            + req.body.Email + "','"
            + req.body.Phone + "','"
            + req.body.dob + "','"
            + req.body.department + "','"
            + req.body.Username + "','"
            + req.body.Password + "','"
            + req.body.Studentid + `')`, function (err, recordset) {

                if (err) console.log(err)

                // send records as a response
                res.send(recordset);
                // console.log(recordset[1]);


            });
    });
});


app.post('/Register', (req, res) => {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // checking if the course is already added
        request.query(`Select * from [Final_Project_Web].[dbo].[Register] where
         ([Studentid] = '` + req.body[0].studentId + "' and [Course] = '"
            + req.body[req.body.length - 1].course + `')`, function (err, recordset) {

                if (err) console.log(err)
                else {
                    if(recordset.recordset.length == 0) {

                        //checking if the student is already registered to 5 courses 
                      var test =  request.query(`Select count(*) as noOfCourses from [Final_Project_Web].[dbo].[Register] where
                        ([Studentid] = '` + req.body[0].studentId + `')`, function (err, recordset) {

                            if (err) console.log(err)
                            else {
                                if(recordset.recordset[0].noOfCourses < 5) {

                                    request.query(`INSERT INTO [Final_Project_Web].[dbo].[Register]
                                    ([Studentid],[Course]) VALUES
                                    ('` + req.body[0].studentId + "','"
                                        + req.body[req.body.length - 1].course + `')`, function (err, recordset) {

                                            if (err) console.log(err)
                                            
                                            // send records as a response
                                            res.send("Less than 5");


                                    });
                                }
                                else {
                                    res.send("More than 5")
                                }

                            }

                        });
                    }
                    else {
                        res.send("Failed")
                    }

                }

        });

        // query to the insert database and get the records
        //  request.query(`INSERT INTO [Final_Project_Web].[dbo].[Register]
        //  ([Studentid]
        //  ,[Course])
        //     VALUES
        //  ('` + req.body[0].studentId + "','"
        //  + req.body[0].course  +`')`, function (err, recordset) {

        //      if (err) console.log(err)

        //      // send records as a response
        //      res.send(recordset);
        //      // console.log(recordset[1]);


        //  });
       
        
                
        
    });
});

app.post('/DeleteCourse', function (req, res) {

   
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query(`Delete from [Final_Project_Web].[dbo].[Register] where
        ([Studentid] = '` + req.body[0].studentId + "' and [Course] = '"
           + req.body[req.body.length - 1].course + `')`, function (err, recordset) {
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});




app.post('/Contact', (req, res) => {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();


        // query to the database and get the records
       request.query(`INSERT INTO [Final_Project_Web].[dbo].[Contact]
       ([Email]
       ,[Studentid]
       ,[Name]
       ,[Comment])
             VALUES
             ('` + req.body.Email + "','"
             + req.body.Studentid + "','"
             + req.body.Studentname + "','"
             + req.body.Comment + `')`, function (err, recordset) {

              if (err) console.log(err)

              // send records as a response
             res.send(recordset);
        //  console.log(recordset[1]);


         });
    });
});



app.get('/administration',function (req,res){


    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();


        // query to the database and get the records
       request.query(`\nSELECT Firstname,Lastname,Course,Phone_Number,Department,Comment
       FROM [Final_Project_Web].[dbo].SignUp
       inner JOIN 
             [Final_Project_Web].[dbo].Register
       ON [Final_Project_Web].[dbo].SignUp.Studentid = [Final_Project_Web].[dbo].Register.Studentid
       inner join 
         [Final_Project_Web].[dbo].Contact
       ON Register.Studentid = [Final_Project_Web].[dbo].Contact.Studentid`, function (err, recordset) {

              if (err) console.log(err)

              // send records as a response
             res.send(recordset);
        //  console.log(recordset[1]);


         });
    });
})