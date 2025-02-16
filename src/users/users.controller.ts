import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { query } from "express";
import { CreateUseDTO } from "./dtos/create-user.dto";
import { PatchUserDTO } from "./dtos/path-user.dto";

@Controller('users')
export class UsersController{
     
    @Get('/:id')
    public getUser(@Param('id', ParseIntPipe, new DefaultValuePipe(10)) id:any, @Query('name') query:any){
        console.log(id);
        return 'This action returns all users '+id;
    }

    @Post('users')
    public createUser(@Body() createUser:CreateUseDTO){
        return 'User created successfully';
    }

    @Patch()
    public updateUser(@Body() updateUser:PatchUserDTO){
        return 'User updated successfully';
    }

}