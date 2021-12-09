import { connect } from "react-redux"

const Suplentes = ({ suplentes, quitarSuplente }) => {
    return (
        <section>
            <h2>Alternates</h2>
            <div className="cancha">
                {
                    suplentes.map(j => (
                        <article className="suplente"  key={j.id}>
                            <div>
                                <img src={j.foto} alt={j.nombre} />
                                <button onClick={() => quitarSuplente(j)}>X</button>
                            </div>
                            <p>{j.nombre}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador){
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)