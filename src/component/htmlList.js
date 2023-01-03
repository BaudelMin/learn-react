function MakeList(props){
    return (
        <div>
            <ul>
                {props.listValues.map((element, index) => {
                    return (
                        <li
                        key={index}
                        >{element}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MakeList
