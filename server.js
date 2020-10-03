const express = require("express")
const app = express()
//const jwt = require('jsonwebtoken')
//const connection = require("./connect");
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());


let cars = require('./controllers/cars')

app.get('/cars',cars.getAll);
app.get('/car/:idCar',cars.getById)
app.post('/addCar',cars.insertCar)
app.put('/updateCar/:idCar',cars.updateCar)
app.delete('/deleteCar/:idCar',cars.deleteCarById)
app.get('/carsDriver',cars.getCarDriver);
app.get('/studentInCar/:idCar',cars.getStudenInCar);

let driver = require('./controllers/driver')

app.get('/drivers',driver.allDriver);
app.get('/driver/:idDriver',driver.driverById)
app.post('/addDriver',driver.insertDriver)
app.put('/updateDriver/:idDriver',driver.updateDriver)
app.delete('/deleteDriver/:idDriver',driver.deleteDriverById)

let carModel = require ('./controllers/carModel')

app.get('/carModels',carModel.getAll);
app.get('/carModel/:idModel',carModel.getById)
app.post('/addCarModel',carModel.insertCarModel)
app.put('/updateCarModel/:idModel',carModel.updateCarModel)
app.delete('/deleteCarModel/:idModel',carModel.deleteCarModelById)

let carPath = require ('./controllers/carPath')

app.get('/carPaths',carPath.getAll);
app.get('/carPath/:idCarPath',carPath.getById)
app.post('/addCarPath',carPath.insertCarPath)
app.put('/updateCarpath/:idCarPath',carPath.updateCarPath)
app.delete('/deleteCarPath/:idCarPath',carPath.deleteCarPathById)
app.get('/carPathInDate/:carId/:date',carPath.pathCarIndate)
app.get('/carPathInThisDate/:carId',carPath.pathCarInThisDate)

let numberProvince = require ('./controllers/numberProvince')

app.get('/numberProvinces',numberProvince.getAll);
app.get('/numberProvince/:idProvince',numberProvince.getById)
app.post('/addNumberProvince',numberProvince.insertNumberProvince)
app.put('/updateNumberProvince/:idProvince',numberProvince.updateNumberProvince)
app.delete('/deleteProvince/:idProvince',numberProvince.deleteNumberProvinceById)

let studentCar = require ('./controllers/studentcCar')

app.get('/studentCars',studentCar.getAll);
app.get('/studentCar/:idStudentCar',studentCar.getById)
app.post('/addStudentCar',studentCar.insertStudentCarById)
app.put('/updateStudentCar/:idStudentCar',studentCar.updateStudentCar)
app.delete('/deleteStudentCar/:idStudentCar',studentCar.deleteStudenCartById)
app.post('/insertStudentsInCar/:idCar',studentCar.insertStudentsInCar)




app.listen(3005)