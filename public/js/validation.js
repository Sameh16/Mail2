$(function() {

    $.validator.setDefaults({
      errorPlacement: function (error, element) {
        if (element.prop('type') === 'radio') {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      }
    });
  

    $("#register-form").validate({
      rules: {

        name: {
            required: true,
            lettersonly: true
          },

        email: {
          required: true,
          email: true
        },

        phone: {
          required: true,
          digits: true
        },

        age:{
            required: true,
            digits:true
        },

        school:{
            required:true
        },

        address: {
          required: true
        },

        workshopsel:{
            required: true
        },

        subworkshopsel:{
            required: true
        },

        grad:{
            required: true
        },     

        attended:{
            required: true
        } 

      },
      messages: {
        name: {
          required: 'الأسم مطلوب',
          lettersonly: 'يجب أن لا يحتوي الأسم إلا على حروف'
        },

        email:{
            required: 'البريد الإلكتروني مطلوب',
            email: 'تأكد من البريد الإلكتروني'
        },

        phone:{
            required:'رقم الهاتف مطلوب',
            digits:'تأكد من رقم الهاتف'
        },

        age:{
            required: 'السن مطلوب',
            digits: 'ادخل أرقام فقط'
        },

        school:{
            required:'الكلية / المدرسة مطلوبة'
        },

        address:{
            required: 'العنوان مطلوب'
        },

        workshopsel:{
            required: 'ورشة العمل مطلوبة'
        },

        subworkshopsel:{
            required: 'من فضلك أختر ورشة عمل فرعية'
        },

        grad:{
            required: 'أختر حالة الدراسة'
        },
        
        attended:{
            required: 'هذا الحقل مطلوب'
        } 

    }
    });
    
  
  });


  function validateOff() {
    validator.destroy();
  }

  