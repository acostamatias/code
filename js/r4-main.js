// Datos para la api
const api = {
  clave: '206b960f336e2ee78b949b5871a415c2',
  ciudad: 'Cordoba'
}

// Se solicitan los datos a la api utilizando fetch
const solicitarDatos = async () => {
  const res = await fetch(`http://api.weatherstack.com/current?access_key=${api.clave}&query=${api.ciudad}`)
  const datos = await res.json()
  return datos
}

// Función para crear la tabla que contendrá los datos enviados por la api
const hacerTabla = () => {
  solicitarDatos().then(data => {
    const html = `
    <table>
      <thead>
        <tr>
        <th>País</th>
        <th>Ciudad</th>
        <th>Sensación térmica</th>
        <th>Humedad</th>
        <th>Temperatura</th>
        <th>Estado del clima</th>
        <th></th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td>${data.location.country}</td>
      <td>${data.location.region}</td>
      <td>${data.current.feelslike}°</td>
      <td>${data.current.humidity}%</td>
      <td>${data.current.temperature}°</td>
      <td>${data.current.weather_descriptions[0]}</td>
      <td><img src="${data.current.weather_icons[0]}"></td>
      </tr>
      </tbody>
    </table>
    `
    document.querySelector('#tabla').innerHTML = html
  })
}

hacerTabla()
