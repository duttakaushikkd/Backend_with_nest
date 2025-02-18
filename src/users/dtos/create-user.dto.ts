import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, Max, MaxLength, MinLength } from 'class-validator';

export class CreateUseDTO{

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    firstName: string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(20)
    lastName?: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;


}