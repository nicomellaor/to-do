import Form from 'react-bootstrap/Form';

function ThemeSwitch({theme, changeTheme}){
    return(
        <Form>
            <Form.Check
            type="switch"
            label="Light/Dark mode"
            checked={theme === "dark"}
            onChange={changeTheme}
            />
        </Form>
    )
}

export default ThemeSwitch