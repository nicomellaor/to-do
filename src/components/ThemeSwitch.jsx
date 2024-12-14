import Form from 'react-bootstrap/Form';

function ThemeSwitch({theme, changeTheme}){
    return(
        <Form>
            <Form.Check
            type="switch"
            label={
                <>
                <i className="bi bi-brightness-high-fill"></i> Light / <i className="bi bi-moon-fill"></i> Dark mode
                </>
            }
            checked={theme === "dark"}
            onChange={changeTheme}
            ></Form.Check>
        </Form>
    )
}

export default ThemeSwitch