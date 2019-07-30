import React from "react";

import {
    Field, Label, Control, Select, TextArea, Input, Icon, Help, Checkbox, Button, Radio
} from "bloomer";

function Form(props) {
    return (
        <div>
            <Field>
                <Label>Name</Label>
                <Control>
                    <Input type="text" placeholder='Text Input' />
                </Control>
            </Field>



            <Field>
                <Label>How do we know eachother?</Label>
                <Control>
                    <Select>
                        <option>Friend</option>
                        <option>Family</option>
                        <option>Perspecitive Employer</option>
                        <option>Rando</option>

                    </Select>
                </Control>
            </Field>

            <Field>
                <Label>Message</Label>
                <Control>
                    <TextArea placeholder={'<TextArea />'} />
                </Control>
            </Field>

            <Field>
                <Control>
                    <Checkbox> I Love The Cardinals </Checkbox>
                </Control>
            </Field>

            <Field>
                <Control>
                    <Radio name="question"> Yes </Radio>
                    <Radio name="question"> No </Radio>
                </Control>
            </Field>

            <Field isGrouped>
                <Control>
                    <Button onClick={props.toggle} isColor='primary'>Submit</Button>
                </Control>
                <Control>
                    <Button isLink>Cancel</Button>
                </Control>
            </Field>
        </div>
    );
};

export default Form;