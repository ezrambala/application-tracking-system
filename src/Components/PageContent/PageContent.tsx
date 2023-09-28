import {
  Form,
  Input,
  Space,
  Switch,
  Divider,
  Select,
  Button,
  Checkbox,
  Upload,
} from "antd";
import { CloseCircleTwoTone } from "@ant-design/icons";
import { useState } from "react";
function PageContent() {
  const [para, setPara] = useState(false);
  const [multi, setMulti] = useState(false);

  const onchange = (e: any) => {
    console.log({ e });
    if ((e = "Paragrah")) {
      setPara(true);
      setMulti(false);
    } else {
      setMulti(true);
      setPara(false);
    }
  };
  const onFinish = (values: any) => {
    console.log({ values });
  };
  return (
    <>
      <div className="page-content">
        <div className="cov-img">
          <div className="card-head">
            <h3>Upload Image</h3>
          </div>
          <div className="img-div">
            <Upload>
              <Button type="primary">Upload Image</Button>
            </Upload>
          </div>
        </div>
        <div className="per-info">
          <div className="card-head">
            <h3>Personal Information</h3>
          </div>
          <div className="form">
            <Form onFinish={onFinish}>
              <Form.Item name={"first"}>
                <Space className="form-inp-space-wid" direction="vertical">
                  <label>First Name</label>
                  <Input placeholder="" className="input-one" />
                  <Divider className="divider" />
                </Space>
              </Form.Item>

              <Form.Item name={"last"}>
                <Space className="form-inp-space-wid" direction="vertical">
                  <label>Last Name</label>
                  <Input placeholder="" className="input-one" />
                  <Divider className="divider" />
                </Space>
              </Form.Item>

              <Form.Item name={"emai"}>
                <Space className="form-inp-space-wid" direction="vertical">
                  <label>Email</label>
                  <Input type="email" placeholder="" className="input-one" />
                  <Divider className="divider" />
                </Space>
              </Form.Item>

              <Form.Item name={"phone"}>
                <Space className="w-100" direction="vertical">
                  <div className="input-space">
                    <label>Phone Number</label>
                    <Space>
                      <Checkbox style={{ color: "#eb6056dd" }}></Checkbox>
                      <label>Internal Use</label>
                      <Switch
                        defaultChecked={false}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                      ></Switch>
                      <label>Hide</label>
                    </Space>
                  </div>
                  <Divider className="divider" />
                </Space>
              </Form.Item>
              <Form.Item name={"nationality"}>
                <Space  className="w-100" direction="vertical">
                  <Space className="input-space" size={60}>
                    <label>Nationality</label>
                    <Space>
                      <Checkbox style={{ color: "#eb6056dd" }}></Checkbox>
                      <label>Internal Use</label>
                      <Switch
                        defaultChecked={false}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                      ></Switch>
                      <label>Hide</label>
                    </Space>
                  </Space>
                  <Divider className="divider" />
                </Space>
              </Form.Item>
              <Form.Item name={"curr-res"}>
                <Space className="w-100" direction="vertical">
                  <Space className="input-space" size={60}>
                    <label>Current Residence</label>
                    <Space>
                      <Checkbox style={{ color: "#eb6056dd" }}></Checkbox>
                      <label>Internal Use</label>
                      <Switch
                        defaultChecked={false}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                      ></Switch>
                      <label>Hide</label>
                    </Space>
                  </Space>
                  <Divider className="divider" />
                </Space>
              </Form.Item>
              <Form.Item name={"id-no"}>
                <Space  className="w-100" direction="vertical">
                  <Space className="input-space" size={60}>
                    <label>ID Number</label>
                    <Space>
                      <Checkbox style={{ color: "#eb6056dd" }}></Checkbox>
                      <label>Internal Use</label>
                      <Switch
                        defaultChecked={false}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                      ></Switch>
                      <label>Hide</label>
                    </Space>
                  </Space>
                  <Divider className="divider" />
                </Space>
              </Form.Item>
              <Form.Item name={"dob"}>
                <Space className="w-100" direction="vertical">
                  <Space className="input-space" size={60}>
                    <label>Date Of Birth</label>
                    <Space>
                      <Checkbox style={{ color: "#eb6056dd" }}></Checkbox>
                      <label>Internal Use</label>
                      <Switch
                        defaultChecked={false}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                      ></Switch>
                      <label>Hide</label>
                    </Space>
                  </Space>
                  <Divider className="divider" />
                </Space>
              </Form.Item>
              <Form.Item name={"gender"}>
                <Space  className="w-100" direction="vertical">
                  <Space  className="input-space" size={60}>
                    <label>Gender</label>
                    <Space>
                      <Checkbox style={{ color: "#eb6056dd" }}></Checkbox>
                      <label>Internal Use</label>
                      <Switch
                        defaultChecked={false}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                      ></Switch>
                      <label>Hide</label>
                    </Space>
                  </Space>
                  <Divider className="divider" />
                </Space>
              </Form.Item>

              <Form.List name={"Questions"}>
                {(fields, { add, remove }) => (
                  <>
                    <Space direction="vertical">
                      {fields.map((field, index) => {
                        return (
                          <Space direction="vertical" key={field.key}>
                            <Form.Item name={[field.name, "Question-Type"]}>
                              <Select
                                placeholder="Select question type"
                                onChange={onchange}
                              >
                                {[
                                  "Paragrah",
                                  "Multiple Choice",
                                  "Dropdown",
                                  "Yes or No",
                                ].map((question) => {
                                  return (
                                    <Select.Option
                                      value={question}
                                      key={question}
                                    >
                                      {question}
                                    </Select.Option>
                                  );
                                })}
                              </Select>
                            </Form.Item>

                            {para && (
                              <Form.Item name={[field.name, "paragrah"]}>
                                <Space direction="vertical">
                                  <label>Question</label>
                                  <Input
                                    type="text"
                                    placeholder="enter your question"
                                    className=""
                                  />
                                </Space>
                              </Form.Item>
                            )}
                            <CloseCircleTwoTone
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          </Space>
                        );
                      })}
                    </Space>
                    <Form.Item key={`fields+2`}>
                      <button
                        className="btn"
                        onClick={() => {
                          add();
                        }}
                      >
                        <svg
                          className="svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#FF0000"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0" />

                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />

                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M4 12H20M12 4V20"
                              className="svg"
                              stroke="#FF0000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />{" "}
                          </g>
                        </svg>
                        <p
                          style={{
                            marginLeft: 14,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          Add a question
                        </p>
                      </button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Button className="colr" htmlType="submit" type="primary">
                Submit
              </Button>

              {/* <Form.Item name="">
                <Select placeholder="Select question type" onChange={onChange}>
                  {["Paragrah", "Multiple Choice", "Dropdown", "Yes or No"].map(
                    (question) => {
                      return (
                        <Select.Option value={question} key={question}>
                          {question}
                        </Select.Option>
                      );
                    }
                  )}
                </Select>
              </Form.Item>

              <Form.Item name={"paragraph"}>
                <Space direction="vertical">
                  <label>Question</label>
                  <Input type="text" placeholder="" className="" />
                </Space>
                <Divider />
              </Form.Item> */}
            </Form>
          </div>
        </div>
        <div className="profile">
          <div className="card-head">
            <h3>Profile</h3>
          </div>
          <div className="form">
            <Form onFinish={onFinish}>
              <Form.Item name={"education"}>
                <Space className="w-100" direction="vertical">
                  <Space className="input-space" size={60}>
                    <label>Education</label>
                    <Space>
                      <Checkbox></Checkbox>
                      <label>Mandatory</label>
                      <Switch
                        defaultChecked={false}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                      ></Switch>
                      <label>Hide</label>
                    </Space>
                  </Space>
                  <Divider className="divider" />
                </Space>
              </Form.Item>
              <Form.Item name={"exp"}>
                <Space className="w-100" direction="vertical">
                  <Space className="input-space" size={60}>
                    <label>Education</label>
                    <Space>
                      <Checkbox></Checkbox>
                      <label>Experience</label>
                      <Switch
                        defaultChecked={false}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                      ></Switch>
                      <label>Hide</label>
                    </Space>
                  </Space>
                  <Divider className="divider" />
                </Space>
              </Form.Item>
              <Form.Item name={"res"}>
                <Space className="w-100" direction="vertical">
                  <Space className="input-space" size={60}>
                    <label>Resume</label>
                    <Space>
                      <Checkbox></Checkbox>
                      <label>Mandatory</label>
                      <Switch
                        defaultChecked={false}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                      ></Switch>
                      <label>Hide</label>
                    </Space>
                  </Space>
                  <Divider className="divider" />
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageContent;
