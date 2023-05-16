interface ButtonProps
{
    title: string
}

const styles =
{ 
    color: '#F00' 
}

export function Button(props: ButtonProps)
{
    return (
        <p style={styles}>
            {props.title}
        </p>
    )
}