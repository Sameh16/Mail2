<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MailController extends Controller
{
    public function index()
    {
        return view('mail');
    }
    public function basic_email(){
        $data = array('name'=>"Sameh LOL");
     
        Mail::send(['text'=>'mail'], $data, function($message) {
           $message->to('samehlol19@gmail.com');
           $message->subject('Laravel Basic Testing Mail');
           $message->from('samehlol16@gmail.com','Sameh LOL');
        });
        echo "Basic Email Sent. Check your inbox.";
     }
  
     public function attachment_email(){
        $data = array('name'=>"Sameh");
        Mail::send('mail', $data, function($message) {
            
           $message->to('moicit.2018@gmail.com');
           $message->subject('MEGA Event');
           $message->from('moicit.2018@gmail.com','MOIC');
           //$message->embed('img/truck.jpg');
           
        });
        echo "HTML Email Sent. Check your inbox.";
     }
     
     public function html_email(){
         //Shroukmansour99@gmail.com
        $data = array('name'=>"Virat Gandhi");
        Mail::send('mail', $data, function($message) {
           $message->to('abc@gmail.com', 'Tutorials Point')->subject
              ('Laravel Testing Mail with Attachment');
           $message->attach('C:\laravel-master\laravel\public\uploads\image.png');
           $message->attach('C:\laravel-master\laravel\public\uploads\test.txt');
           $message->from('xyz@gmail.com','Virat Gandhi');
        });
        echo "Email Sent with attachment. Check your inbox.";
     }

}
