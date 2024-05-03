const EditProfileForm = () => {
  return (
    <div>
      <div className=" relative">
        <input
          type="text"
          placeholder="نام"
          className=" absolute -bottom-10 left-60 rounded-md lg:left-72 lg:-bottom-28"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="نام خانوادگی"
          className=" relative -bottom-4 left-8 rounded-md lg:left-5 lg:-bottom-[87px]"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="کد ملی"
          className=" relative -bottom-10 left-60 rounded-md lg:-left-60 lg:-bottom-[61px]"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="ایمیل"
          className=" relative -bottom-4 left-8 rounded-md lg:left-72 lg:-bottom-28"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="تاریخ تولد"
          className=" relative -bottom-10 left-60 rounded-md lg:left-5 lg:-bottom-[87px]"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="شماره موبایل"
          className=" relative -bottom-4 left-8 rounded-md lg:-left-60 lg:-bottom-[61px]"
        />
      </div>
      <div>
        <input
          type="submit"
          value="ثبت اطلاعات"
          className=" relative -bottom-10 left-60 rounded-md bg-blue-500 text-cyan-50 w-28 lg:left-60 lg:-bottom-[137px]"
        />
      </div>
    </div>
  );
};
export { EditProfileForm };
