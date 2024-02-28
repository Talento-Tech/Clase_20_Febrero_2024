/* Importar primero la biblioteca de React */
import React from "react";
/* Importar los estilos */
import "../estilos/Perfil.css";

/* Recibiremos un objeto prop como parametro que tendra las propiedades del componente para cuando las utilicemos */
function Perfil(props) {
  return (
    /* Contenedor principal */
    <div className="contenedor-perfil">
        <img className="imagen-perfil"
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt="foto de desarrollador"
        />
        <div className="contenedor-texto-perfil">
            <p className="nombre-perfil">
                <strong>{props.nombre}</strong> de {props.pais}
            </p>
            <p className="cargo-perfil">
                {props.cargo} en <strong>{props.empresa}</strong>
            </p>
            <p className="resena-perfil">
                {props.resena}
            </p>

            {/* Agregamos los botones para seguir en LinkedIn, YouTube y Twitter */}
            <button onClick={() => window.open(props.linkedin, '_blank')}>
                <img
                src={require(`../imagenes/linkedIn.png`)}
                alt="Logo LinkedIn" /> 
            </button>
            <button onClick={() => window.open(props.youtube, '_blank')}>
                <img
                src={require(`../imagenes/youtube.png`)}
                alt="Logo Youtube" /> 
            </button>
            <button onClick={() => window.open(props.twitter, '_blank')}>
                <img
                src={require(`../imagenes/twitter.png`)}
                alt="Logo Twitter" />
            </button>
        </div>
    </div>
  );
}

/* Esta función nos permite importar el componente perfil para que pueda ser utilizado en otro lado */
export default Perfil;
