<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_datas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Name');
            $table->string('Email');
            $table->string('PhoneNumber');
            $table->integer('Age');
            $table->string('EducationState');
            $table->string('GraduationState');
            $table->string('Address');
            $table->string('WorkShop');
            $table->string('SubWorkShop');
            $table->tinyInteger('Attendance');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_datas');
    }
}
