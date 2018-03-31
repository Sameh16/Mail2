<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\UserData;

class FormController extends Controller
{

    public function send_email($data){
       
        Mail::send('mail', $data, function($message)use($data) {
           $message->to($data['email'],$data['name']);
           $message->subject('MEGA Event');
           $message->from('moicit.2018@gmail.com','MOIC');
           //$message->embed('img/truck.jpg');
           
        });
        //  what do affter finish submit success
     }

     public function form()
     {
        return view('form.form');
     }

         /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        /*$this->validate($request,[
            'email'=>'required',
            'age' =>'required',
            'workshop'=>'required',
            
        ]);*/
        $user=new UserData;
        
        $user->Name=$request->input('name');
        $user->Email=$request->input('email');
        $user->Age=$request->input('age');
        $user->PhoneNumber=$request->input('phone');
        $user->EducationState=$request->input('school');
        $user->Address=$request->input('address');
        $user->GraduationState=$request->input('grad');
        $user->WorkShop=$request->input('workshopsel');
        $user->SubWorkShop=$request->input('wsInfo');
       // $user->SubWorkShop="ss";
        if($request->input('attend')=="yes")
        {
            $user->Attendance=1;
        }
        else
        {
            $user->Attendance=0;
        }


        $user->save();
        $data=array('name'=>$user->Name,'email'=>$user->Email);
        $this->send_email($data);
        /*$count = DB::table('users_datas')->where('WorkShop',$request->input('workshop'))->orWhere('subworkshop',$request->input('subworkshop'))->count(DB::raw('DISTINCT Email'));
        $count1 = DB::table('users_datas')->where('WorkShop',$request->input('workshop'))->count(DB::raw('DISTINCT Email'));

        if($user->WorkShop=="it" or $user->WorkShop==""or $user->WorkShop=="")
        {
            if($count<25)
            {
                $user->save();
                $data=array('name'=>$user->Name,'email'=>$user->Email);
                send_email($data);
                return view("home");
            }
            else
            {
                return view('welcome');
            }

        }

        else if($user->WorkShop=="web" or$user->WorkShop==""or $user->WorkShop=="")
        {
            if($count1<25)
            {
                $user->save();
                $data=array('name'=>$user->Name,'email'=>$user->Email);
                send_email($data);
                return view("welcome");
            }
            else
            {
                return view('index');
            }
        }
        */
        
    }
    
}
