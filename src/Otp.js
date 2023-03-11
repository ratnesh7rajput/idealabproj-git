export default function Otp(){
  
    return(
        <>
        <div class="container d-flex justify-content-center align-items-center">
  <div class="card text-center">
    <div class="card-header p-5">
      <img src="logo192.png"/>
      <h5 class="mb-2">OTP VERIFICATION</h5>
      <div>
        <small>code has been send to pj*******email.com</small>
      </div>
    </div>
    <div class="input-container d-flex flex-row justify-content-center mt-2">
      <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
      <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
      <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
      <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
      <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
    </div>
    <div>
      <small>
      didn't get the otp
      <a href="#" class="text-decoration-none">Resend</a>
      </small>
    </div>
    <div class="mt-3 mb-5">
      <button class="btn btn-success px-4 verify-btn">verify</button>
    </div>
  </div>
</div>
        </>
    )
}