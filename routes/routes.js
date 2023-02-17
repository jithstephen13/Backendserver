
const express=require("express")
const { tokenveyfy } = require("../midleweare/tokenverify")
const { Addnode } = require("../routescontroller/AddNotes")
const { Deletenode } = require("../routescontroller/DeleteNotes")
const { Getnode } = require("../routescontroller/GetNotes")
const { HomePage } = require("../routescontroller/HomePage")
const { Login } = require("../routescontroller/Login")
const { Register } = require("../routescontroller/Register")
const { Updatenode } = require("../routescontroller/UpdateteNotes")
const AppRoutes=express.Router()

AppRoutes.get("/",HomePage)

AppRoutes.post("/register",Register)
AppRoutes.post("/login",Login)


AppRoutes.get("/post",tokenveyfy,Getnode)
AppRoutes.post("/post",tokenveyfy,Addnode)
AppRoutes.patch("/post/:id",tokenveyfy,Updatenode)
AppRoutes.delete("/post/:id",tokenveyfy,Deletenode)


module.exports={AppRoutes}