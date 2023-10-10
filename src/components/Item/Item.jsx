import s from './style.module.scss'

export default function Item(props) {
    console.log(props.object.color);
    return (
        <div className='kart'>
            <div className={s.conteyner}>
                <p className={s[props.object.color]}>{props.object.userName}</p>
                <div className={s[props.object.colorback]}>
                    <p className='cena'>руб </p>
                    <span> {props.object.age} </span>
                    <p className='time'> /мес</p>
                </div>

                <p className={s[props.object.styles]}> {props.object.city}</p>
                <p className={s[props.object.style]}>{props.object.lemit}</p>
            </div>
        </div>
    )
}
