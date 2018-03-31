$(function() {

    $.validator.setDefaults({
      errorClass: 'help-block',
      highlight: function(element) {
        $(element)
          .closest('.form-group')
          .addClass('has-error');
      },
      unhighlight: function(element) {
        $(element)
          .closest('.form-group')
          .removeClass('has-error');
      },
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
          email: true,
        },

        phone: {
          required: true,
          digits: true,
        },

        age:{
            required: true,
            digits:true
        },

        school:{
            required:true,
        },

        address: {
          required: true
        },

        workshopsel:{
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
          lettersonly: 'يجب أن لا يحتوي الأسم على أرقام',
        },

        email:{
            required: 'البريد الإلكتروني مطلوب',
            email: 'تأكد من البريد الإلكتروني',
        },

        phone:{
            required:'رقم الهاتف مطلوب',
            digits:'لابد أن لا يحتوي رقم الهاتف على حروف !',
        },

        age:{
            required: 'السن مطلوب',
            digits: 'ادخل أرقام فقط'
        },

        school:{
            required:'الكلية / المدرسة مطلوبة'
        },

        address:{
            required: 'العنوان مطلوب',
        },

        workshopsel:{
            required: 'ورشة العمل مطلوبة'
        },

        grad:{
            required: 'أختر حالة الدراسة'
        },
        
        attended:{
            required: 'هذا الحقل مطلوب',
        } 

    }
    });
  
  });