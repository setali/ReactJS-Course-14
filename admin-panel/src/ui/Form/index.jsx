import {
  Form,
  Input,
  Select as AntSelect,
  Checkbox as AntCheckbox,
  Button,
  DatePicker as AntDatePicker
} from "antd";
import React from "react";

export function Text({ name, label, required, len, max, min, type }) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, len, max, min, type }]}
    >
      <Input maxLength={len} />
    </Form.Item>
  );
}

export function Email({ name, label, required, len, max, min }) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, len, max, min, type: "email" }]}
    >
      <Input maxLength={len} />
    </Form.Item>
  );
}

export function Password({ name, label, required, len, max, min }) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        { required, len, max, min },
        {
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
  );
}

export function Select({ name, label, required, options = [] }) {
  return (
    <Form.Item label={label} name={name} rules={[{ required }]}>
      <AntSelect>
        {options.map((option) => (
          <AntSelect.Option value={option.value}>
            {option.label}
          </AntSelect.Option>
        ))}
      </AntSelect>
    </Form.Item>
  );
}

export function Checkbox({ name, label }) {
  return (
    <Form.Item name={name} valuePropName="checked">
      <AntCheckbox>{label}</AntCheckbox>
    </Form.Item>
  );
}

export function DatePicker({ label, name, ...props }) {
  return (
    <Form.Item label={label} name={name}>
      <AntDatePicker {...props} />
    </Form.Item>
  );
}

export function Submit({ label = "ذخیره" }) {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit">
        {label}
      </Button>
    </Form.Item>
  );
}

Object.assign(Form, {
  Text,
  Submit,
  Password,
  Email,
  DatePicker,
  Checkbox,
  Select,
});

export default Form;
