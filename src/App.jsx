
import { useState } from "react";
import "./App.css";

const categorias = [
  { nombre: "Desayunos matutinos", icono: "♧" },
  { nombre: "Comida corrida", icono: "♨" },
  { nombre: "Tacos y carnes a la carta", icono: "♜" },
  { nombre: "Sopas y bebidas", icono: "♨" },
  { nombre: "Especialidades de sábado", icono: "♧" },
];

const productos = [
  {
    nombre: "Huevos al gusto",
    categoria: "Desayunos matutinos",
    imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=85",
    descripcion: "Un desayuno para comenzar el día.",
  },
  {
    nombre: "Chilaquiles",
    categoria: "Desayunos matutinos",
    imagen: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=85",
    descripcion: "Un clásico de la cocina mexicana.",
  },
  {
    nombre: "Hot cakes",
    categoria: "Desayunos matutinos",
    imagen: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=85",
    descripcion: "Una opción dulce para el desayuno.",
  },
  {
    nombre: "Tacos",
    categoria: "Tacos y carnes a la carta",
    imagen: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=85",
    descripcion: "Consulta las opciones disponibles.",
  },
  {
    nombre: "Sopa del día",
    categoria: "Comida corrida",
    imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=85",
    descripcion: "Una opción casera para acompañar tu comida.",
  },
  {
    nombre: "Agua fresca",
    categoria: "Sopas y bebidas",
    imagen: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=85",
    descripcion: "Una bebida para acompañar tus alimentos.",
  },
  {
    nombre: "Especialidad de sábado",
    categoria: "Especialidades de sábado",
    imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=85",
    descripcion: "Pregunta qué se prepara este sábado.",
  },
];

const comidaDelDia = [
  { icono: "🥤", nombre: "Agua de sabor" },
  { icono: "🍲", nombre: "Sopa del día" },
  { icono: "🍚", nombre: "Arroz o espagueti" },
  { icono: "🍛", nombre: "Plato fuerte" },
  { icono: "🍮", nombre: "Postre" },
];

const direccionConfirmada =
  "Calle Selva #37, Colonia Atlanta, C.P. 54740, Cuautitlán Izcalli, Estado de México";
const horarioConfirmado = "Lunes a sábado, de 8:00 a. m. a 4:00 p. m.";
const telefonoConfirmado = "";
const urlPublicada = "";

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState("Desayunos matutinos");
  const [menuMovil, setMenuMovil] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === categoriaActiva
  );

  const enlaceMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccionConfirmada)}`;

  const enviarFormulario = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="sitio">
      <div className="aviso-superior">
        <span>Tradición, sabor y ahora también en digital</span>
        <span>Atlanta · Cuautitlán Izcalli</span>
      </div>

      <header className="encabezado">
        <a className="logotipo" href="#inicio">
          <span className="logotipo-dibujo">♨</span>
          <span className="logotipo-texto">
            <strong>Las Cazuelas</strong>
            <small>de Lupita</small>
          </span>
        </a>

        <button
          className="boton-hamburguesa"
          type="button"
          onClick={() => setMenuMovil(!menuMovil)}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuMovil}
        >
          {menuMovil ? "✕" : "☰"}
        </button>

        <nav className={menuMovil ? "navegacion abierta" : "navegacion"}>
          <a href="#inicio" onClick={() => setMenuMovil(false)}>Inicio</a>
          <a href="#menu" onClick={() => setMenuMovil(false)}>Menú</a>
          <a href="#ubicacion" onClick={() => setMenuMovil(false)}>Ubicación</a>
          <a href="#contacto" onClick={() => setMenuMovil(false)}>Contacto</a>
          <a href="#menu" className="nav-destacado" onClick={() => setMenuMovil(false)}>Ver menú</a>
        </nav>
      </header>

      <main>
        <section className="inicio" id="inicio">
          <div className="imagen-portada">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90"
              alt="Platillos de comida mexicana"
            />
            <div className="portada-capa" />
            <div className="portada-contenido">
              <span className="etiqueta-portada">EL SABOR DE NUESTRA COCINA</span>
              <h1>
                Sabor tradicional,
                <br />
                como en casa
              </h1>
              <p>
                Disfruta de nuestros platillos con el auténtico
                sabor mexicano.
              </p>
              <a className="boton rosa" href="#menu">Ver menú <span>→</span></a>
            </div>
            <span className="portada-sello">Hecho con cariño ♥</span>
          </div>

          <div className="accesos-rapidos">
            <a href="#menu">
              <span className="acceso-icono">▤</span>
              <span>Menú digital</span>
            </a>
            <a href="#whatsapp">
              <span className="acceso-icono">◉</span>
              <span>Pedidos por WhatsApp</span>
            </a>
            <a href="#ubicacion">
              <span className="acceso-icono">⌖</span>
              <span>Ubicación</span>
            </a>
            <a href="#horario">
              <span className="acceso-icono">◷</span>
              <span>Horario</span>
            </a>
          </div>
        </section>

        <section className="seccion-menu" id="menu">
          <div className="titulo-seccion">
            <span className="ceja">DESCUBRE NUESTROS SABORES</span>
            <h2>Nuestro <em>menú</em></h2>
            <p>
              Conoce las categorías y consulta las opciones disponibles
              en Las Cazuelas de Lupita.
            </p>
          </div>

          <div className="menu-layout">
            <aside className="categorias">
              <h3>Nuestro Menú</h3>
              {categorias.map((categoria) => (
                <button
                  type="button"
                  key={categoria.nombre}
                  className={categoriaActiva === categoria.nombre ? "categoria activa" : "categoria"}
                  onClick={() => setCategoriaActiva(categoria.nombre)}
                  aria-pressed={categoriaActiva === categoria.nombre}
                >
                  <span>{categoria.icono}</span>
                  {categoria.nombre}
                </button>
              ))}
            </aside>

            <div className="productos">
              <div className="productos-titulo">
                <h3>{categoriaActiva}</h3>
                <span>{productosFiltrados.length} opciones ilustrativas</span>
              </div>

              <div className="productos-grid">
                {productosFiltrados.length > 0 ? (
                  productosFiltrados.map((producto) => (
                    <article className="producto" key={producto.nombre}>
                      <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
                      <div className="producto-contenido">
                        <h4>{producto.nombre}</h4>
                        <p>{producto.descripcion}</p>
                        <span className="precio">Precio por confirmar</span>
                        <a href="#whatsapp" className="boton rosa boton-producto">
                          Consultar <span>→</span>
                        </a>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="categoria-vacia">
                    <span>🍲</span>
                    <h4>Próximamente</h4>
                    <p>
                      Consulta esta categoría con el negocio para conocer
                      sus platillos y disponibilidad.
                    </p>
                    <a href="#whatsapp" className="boton rosa">Consultar menú</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="nota-datos">
            Las fotografías son ilustrativas. Los platillos, precios y
            disponibilidad deben confirmarse con la dueña antes de publicar.
          </p>
        </section>

        <section className="comida-dia" id="comida-dia">
          <div className="comida-foto">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90"
              alt="Comida casera mexicana"
              loading="lazy"
            />
            <div className="comida-capa" />
            <div className="comida-titulo">
              <span className="ceja claro">SABOR CASERO TODOS LOS DÍAS</span>
              <h2>Comida corrida</h2>
              <p>Un menú completo, casero y delicioso.</p>
            </div>
          </div>

          <div className="comida-contenido">
            <div className="fecha-comida">
              <span>MENÚ DEL DÍA</span>
              <strong>Fecha por actualizar</strong>
            </div>
            <div className="comida-componentes">
              {comidaDelDia.map((item) => (
                <div className="componente" key={item.nombre}>
                  <span className="componente-icono">{item.icono}</span>
                  <span>{item.nombre}</span>
                </div>
              ))}
            </div>
            <p className="comida-aviso">
              La dueña deberá actualizar la fecha, los platillos y el precio
              cada día. No se muestra un menú anterior como si fuera el vigente.
            </p>
            <a href="#whatsapp" className="boton rosa">
              Consultar menú del día <span>→</span>
            </a>
          </div>
        </section>

        <section className="whatsapp-seccion" id="whatsapp">
          <div className="whatsapp-icono">◉</div>
          <div className="whatsapp-texto">
            <span className="ceja claro">HAZ TU CONSULTA FÁCILMENTE</span>
            <h2>Haz tu pedido por WhatsApp</h2>
            <p>Es rápido, fácil y seguro.</p>
            <p className="whatsapp-nota">
              Pregunta por el menú, la disponibilidad y los precios.
            </p>
            <button
              type="button"
              className="boton boton-whatsapp"
              aria-label="Botón de WhatsApp sin función"
            >
              Enviar mensaje <span>→</span>
            </button>
            <p className="whatsapp-nota">
              Botón de demostración. La función de WhatsApp aún no está habilitada.
            </p>
          </div>
          <div className="telefono-demo">
            <div className="telefono-camara" />
            <div className="telefono-pantalla">
              <div className="telefono-barra">Las Cazuelas de Lupita</div>
              <div className="chat-burbuja">Hola, ¿me comparten el menú de hoy?</div>
              <div className="chat-burbuja respuesta">¡Con gusto! Consulta nuestras opciones.</div>
              <div className="chat-burbuja">¿Qué platillos tienen disponibles?</div>
              <div className="chat-pie">Mensaje de ejemplo</div>
            </div>
          </div>
        </section>

        <section className="ubicacion-seccion" id="ubicacion">
          <div className="ubicacion-info">
            <span className="ceja">VEN A CONOCERNOS</span>
            <h2>¿Dónde <em>estamos?</em></h2>
            <p className="dato-ubicacion">
              <span>⌖</span>
              {direccionConfirmada}
            </p>
            <a className="boton rosa" href={enlaceMapa} target="_blank" rel="noreferrer">
              Abrir Google Maps <span>↗</span>
            </a>
            <div className="datos-horario" id="horario">
              <p>
                <span>☎</span>
                <strong>Teléfono:</strong>{" "}
                {telefonoConfirmado || "Número pendiente de confirmar"}
              </p>
              <p>
                <span>◷</span>
                <strong>Horario:</strong> {horarioConfirmado}
              </p>
            </div>
          </div>

          <a
            className="mapa-panel"
            href={enlaceMapa}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir ubicación en Google Maps"
          >
            <div className="mapa-calle calle-uno" />
            <div className="mapa-calle calle-dos" />
            <div className="mapa-calle calle-tres" />
            <div className="mapa-calle calle-cuatro" />
            <div className="mapa-zona zona-uno" />
            <div className="mapa-zona zona-dos" />
            <div className="mapa-marcador">⌖</div>
            <div className="mapa-etiqueta">Las Cazuelas de Lupita</div>
            <span className="mapa-abrir">Ver en Google Maps ↗</span>
          </a>
        </section>

        <section className="contacto-seccion" id="contacto">
          <div className="formulario-panel">
            <span className="ceja">ESTAMOS PARA ATENDERTE</span>
            <h2>Envíanos un mensaje</h2>
            {enviado ? (
              <div className="confirmacion">
                <span>♥</span>
                <h3>¡Gracias por escribirnos!</h3>
                <p>
                  El formulario es una demostración visual. Para recibir
                  mensajes reales debe conectarse a un servicio de envío.
                </p>
                <button
                  type="button"
                  className="boton rosa"
                  onClick={() => setEnviado(false)}
                >
                  Escribir otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={enviarFormulario}>
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  required
                />

                <label htmlFor="telefono">Número telefónico</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Tu número telefónico"
                  required
                />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  rows="4"
                  required
                />

                <button type="submit" className="boton rosa boton-enviar">
                  Enviar mensaje <span>→</span>
                </button>
              </form>
            )}
          </div>

          <div className="contacto-datos">
            <div className="dato-contacto">
              <span className="dato-icono">☎</span>
              <div>
                <strong>Teléfono</strong>
                <p>{telefonoConfirmado || "Número pendiente de confirmar"}</p>
              </div>
            </div>
            <div className="dato-contacto">
              <span className="dato-icono">⌖</span>
              <div>
                <strong>Ubicación</strong>
                <p>{direccionConfirmada}</p>
              </div>
            </div>
            <div className="redes-sociales">
              <span>Encuéntranos en</span>
              <a href="#contacto" aria-label="Facebook">f</a>
              <a href="#contacto" aria-label="Instagram">◎</a>
              <a href="#contacto" aria-label="TikTok">♪</a>
            </div>
            <p className="nota-contacto">
            En este apartado agregaremos links de paginas web del local
            </p>
          </div>
        </section>

        <section className="parte-final">
          <article className="vista-celular">
            <span className="numero-seccion">7</span>
            <h2>Vista en celular</h2>
            <div className="celular">
              <div className="celular-superior" />
              <div className="celular-header">🍲 Las Cazuelas ☰</div>
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80"
                alt="Vista previa del menú en celular"
                loading="lazy"
              />
              <div className="celular-contenido">
                <strong>Sabor tradicional, como en casa</strong>
                <a href="#menu">Ver menú</a>
                <p>Menú digital · Ubicación · Contacto</p>
              </div>
            </div>
            <p className="nota-responsive">
              La página se adapta a celulares, tabletas y computadoras para
              que sea cómoda y fácil de usar.
            </p>
          </article>

          <article className="qr-seccion">
            <span className="numero-seccion">8</span>
            <h2>Menú digital en el local</h2>
            <div className="qr-contenedor">
              <div className="qr-cartel">
                <span>Las Cazuelas de Lupita</span>
                <strong>Escanea nuestro menú</strong>
                {urlPublicada ? (
                  <img
                    className="qr-real"
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(urlPublicada)}`}
                    alt="Código QR para abrir el menú publicado"
                  />
                ) : (
                  <div className="qr-pendiente" aria-label="Código QR pendiente de configurar">
                    <span>QR</span>
                    <small>Pendiente de publicación</small>
                  </div>
                )}
              </div>
            </div>
            <p>
              El código QR definitivo debe dirigir a la dirección real de la
              página una vez que esté publicada en internet.
            </p>
          </article>

          <article className="estilo-seccion">
            <span className="numero-seccion">9</span>
            <h2>Colores y estilo visual</h2>
            <div className="paleta">
              <div><span className="color-muestra cafe" /><small>Café</small><b>Primario</b></div>
              <div><span className="color-muestra rosa-color" /><small>Rosa</small><b>Acento</b></div>
              <div><span className="color-muestra naranja" /><small>Naranja</small><b>Acento</b></div>
              <div><span className="color-muestra verde" /><small>Verde</small><b>Apoyo</b></div>
              <div><span className="color-muestra azul" /><small>Azul</small><b>Apoyo</b></div>
              <div><span className="color-muestra crema" /><small>Crema</small><b>Fondo</b></div>
            </div>
            <div className="estilo-detalles">
              <div>
                <strong>Tipografía</strong>
                <p>Títulos: Playfair Display</p>
                <p>Textos: Poppins</p>
              </div>
              <div>
                <strong>Estilo de imágenes</strong>
                <p>✓ Fotografías claras y naturales</p>
                <p>✓ Ambiente familiar y tradicional</p>
              </div>
            </div>
            <div className="frase-final">♥ Tradición, sabor y ahora también en digital</div>
          </article>
        </section>
      </main>

      <footer className="pie-pagina">
        <a className="logotipo logotipo-pie" href="#inicio">
          <span className="logotipo-dibujo">♨</span>
          <span className="logotipo-texto">
            <strong>Las Cazuelas</strong>
            <small>de Lupita</small>
          </span>
        </a>
        <p>Una experiencia digital con el mismo sabor de siempre.</p>
        <a href="#inicio" className="volver-arriba">Volver al inicio ↑</a>
        <div className="copyright">
          © {new Date().getFullYear()} Las Cazuelas de Lupita
        </div>
      </footer>
    </div>
  );
}

export default App;
