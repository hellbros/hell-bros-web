'use client'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Button from '@/app/_components/Button';
import { ContactUsCardStyled } from './styles';
import { theme } from '@/app/_styles/theme';

type Props = {}

function ContactUsCard({}: Props) {

  const SHOW_FORM = false; // hidden until the email + captcha are wired up
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const onSubmitForm = (data: any): void => {

    // console.log(data)

    // setIsLoading(true);

    // const params = {
    //   ...data,
    //   'g-recaptcha-response': recaptchaValue,
    // };

    // emailjs.send(
    //   "service_ifkaspo",
    //   "template_ik3jew4",
    //   params,
    //   "oPgH-MPi0r99sxBsg",
    // )
    //   .then(
    //     (result) => {
    //       console.log(result.text);

    //       reset();

    //       const divContentEditable = document.getElementById('message');
    //       if (divContentEditable) {
    //         divContentEditable.innerHTML = '';
    //       }

    //       toast.success(<Text styles="toast">¡Gracias por tu solicitud! Nos pondremos en contacto para saber más sobre el proyecto.</Text>, {
    //         style: {
    //           borderRadius: '18px',
    //         },
    //         iconTheme: {
    //           primary: '#F76E00',
    //           secondary: '#FFFFFF',
    //         },
    //         duration: 5000,
    //       })

    //       setCaptchaMessage("");

    //       setIsLoading(false);
    //     },
    //     (error) => {
    //       console.log(error.text);

    //       toast.error(<Text styles="toast">¡Ups! Algo salió mal y el mensaje no se envió.</Text>, {
    //         style: {
    //           borderRadius: '18px',
    //         },
    //         iconTheme: {
    //           primary: '#000000',
    //           secondary: '#FFFFFF',
    //         },
    //         duration: 5000,
    //       })

    //       setIsLoading(false);
    //     }
    //   )
  };

  const autoResize = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight + 4.6}px`;
    }
  };

  return (
    <ContactUsCardStyled>
        <div className='title-container'>
            <h2 className='title'>
                Contact us
            </h2>
            <div className='message'>
            Want to get in touch? Got a question, or interested in collaborating on something? We&apos;d love to hear from you.
            </div>
        </div>


        {SHOW_FORM && (
        <form onSubmit={handleSubmit((data) => onSubmitForm(JSON.stringify(data)))} className='form-container'>
            <div className='form-item'>
                <label htmlFor="email">Email</label>
                <input id="email" {...register("email")} placeholder="Enter your email" className='input'/>
            </div>
            <div className='form-item'>
                <label htmlFor="mensaje">Message</label>
                <textarea
                  id="mensaje"
                  {...register("mensaje")}
                  ref={textAreaRef}
                  placeholder="Tell us about your project"
                  className="input"
                  onInput={autoResize}
                  style={{
                    resize: "none",
                    overflow: "hidden",
                  }}
                />
            </div>           
            
            <p>{data}</p>
            <Button fullWidth $variant='solid' type='submit' color={theme.colors.primary}>
                Send
                </Button>
        </form>
        )}

    </ContactUsCardStyled>
  )
}

export default ContactUsCard