import { Divider } from "antd";
import request from "../../assets/tools/request";
import Form from "../../ui/Form";
import { GENDER_OPTIONS } from "../../assets/tools/constants";

const { Text, Checkbox, DatePicker, Email, Password, Select, Submit } = Form;

export default function Add() {
  const onFinish = (values) => {
    console.log("Success:", values);
    request.post("/users", values);
  };

  return (
    <div>
      <h2>افزودن کاربر جدید</h2>
      <Divider />

      <Form name="basic" onFinish={onFinish}>
        <Text label="نام کاربری" name="username" required min={3} />
        <Text label="شماره تلفن" name="phone" required len={11} />
        <Email label="ایمیل" name="email" required />
        <Password label="رمزعبور" name="password" />
        <Select label="جنسیت" name="gender" options={GENDER_OPTIONS} />
        <Checkbox name="isAdmin" label="ادمین" />
        <DatePicker label="تاریخ تولد" name="birthdate" />
        <Submit />
      </Form>
    </div>
  );
}
