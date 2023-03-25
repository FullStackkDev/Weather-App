import "../Styles/InputCity.css"
export default function InputCity({ onInputHandler, onSubmitHandler, inputCity }) {
    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={inputCity} placeholder="City..." onChange={onInputHandler} />
            <button type="submit">Search</button>
        </form>
    )
}