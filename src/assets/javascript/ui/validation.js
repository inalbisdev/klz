let $ = require('jquery');


module.exports = {

    locators: {
        $form: ".o-contact-form",
        $name: "#name",
        $phone: "#phone",
        $surname: "#surmane",
        $company: "#company",
        $email: "#email",
        $request: "#email",
        $submit: "#submitForm"
    },


    validateEmail: function (email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },

    validatePhone: function (phone) {
        let re = /^[\+?|\(]{0,2}[\d\s\-\(\))]{3,}$/;
        let minLenght = 9;
        let MaxLenght = 15;
        let phoneVal = phone.replace(/ /g, '');

        return !!(re.exec(phoneVal) && phoneVal.length >= minLenght && phoneVal.length <= MaxLenght);
    },


    removeAllErrors: function () {
        $('.m-field__error', this.locators.$form).remove();
    },

    focusToInput: function () {
        $('.o-contact-form__form').find('.m-field__error').first().parents('.m-field').find('.a-input').focus();
    },


    validateForm: function (focus) {

        let valid = true,
            that = this;

        $('.is-required', this.locators.$form).each(function () {
            let $this = $(this);
            let inputName = $this.attr("name");


            if (inputName === "name" && $this.val() === '') {
                valid = false;
                $this.addClass('error');
                $this.parents('.m-field').append('<span class="m-field__error">Introduce un nombre por favor</span>');

            }
            if (inputName === "phone" && $this.val() === '') {
                valid = false;
                $this.addClass('error');
                $this.parents('.m-field').append('<span class="m-field__error">Introduce un teléfono por favor</span>');

            }
            if (inputName === "phone" && $this.val() !== '') {
                if (!that.validatePhone($this.val())) {
                    valid = false;
                    $this.addClass('error');
                    $this.parents('.m-field').append('<span class="m-field__error">Introduce un teléfono válido</span>');

                }
            }
            if (inputName === "surname" && $this.val() === '') {
                valid = false;
                $this.addClass('error');
                $this.parents('.m-field').append('<span class="m-field__error">Introduce un apellido por favor</span>');
            }
            if (inputName === "email" && $this.val() === '') {
                valid = false;
                $this.addClass('error');
                $this.parents('.m-field').append('<span class="m-field__error">Introduce un email por favor</span>');
            }
            if (inputName === "email" && $this.val() !== '') {
                if (!that.validateEmail($this.val())) {
                    valid = false;
                    $this.addClass('error');
                    $this.parents('.m-field').append('<span class="m-field__error">Introduce un email válido</span>');
                }
            }
            if (inputName === "request" && $this.val() === '') {
                valid = false;
                $this.addClass('error');
                $this.parents('.m-field').append('<span class="m-field__error">Selecciona una opción por favor</span>');
            }

        });

        if (!valid && focus) {
            this.focusToInput()
        }


        return valid;
    },

    bindEvents: function () {

        let that = this;

        $(document).on('keyup change', '.error', function () {
            that.removeAllErrors();
            that.validateForm(false)
        });


        $(this.locators.$submit).on('click', function (e) {
            e.preventDefault();
            that.removeAllErrors();
            if (that.validateForm(true)) {
                $('form', that.locators.$form).submit();
            }
        });


    },

    init: function () {
        if (this.locators.$form.length > 0) {
            this.bindEvents();
        }

    }
};



