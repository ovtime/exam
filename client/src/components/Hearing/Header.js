
const Header = props => (
    <p >
        {props.title}
        <br></br>
        {`תיק מספר ${props.caseNumber}`}
    </p>
)

export default Header;