import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, ResourceRef, Signal } from '@angular/core';
import { Observable } from 'rxjs';

export interface Film {
  id: number;
  poster_path: string;
  title: string;
  name?: string;
  release_date: string;
  first_air_date?: string;
  overview: string;
  vote_average: number;
  genre_ids: number[];
}

export interface FilmsResponse {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
}

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private response = {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: '/1RgPyOhN4DRs225BGTlHJqCudII.jpg',
        genre_ids: [16, 28, 14, 53],
        id: 1311031,
        original_language: 'ja',
        original_title: '劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来',
        overview:
          'El Cuerpo de Cazadores de Demonios se enfrenta a los Doce Kizuki restantes antes de enfrentarse a Muzan en el Castillo del Infinito para derrotarlo de una vez por todas.',
        popularity: 766.0999,
        poster_path: '/iWLV12z9oexSRLz2WKyqCZbKoPA.jpg',
        release_date: '2025-07-18',
        title: 'Guardianes de la noche: Kimetsu no Yaiba La fortaleza infinita',
        video: false,
        vote_average: 7.7,
        vote_count: 279,
      },
      {
        adult: false,
        backdrop_path: '/iZLqwEwUViJdSkGVjePGhxYzbDb.jpg',
        genre_ids: [878, 53],
        id: 755898,
        original_language: 'en',
        original_title: 'War of the Worlds',
        overview:
          'Will Radford, un destacado analista de ciberseguridad, pasa sus días rastreando posibles amenazas a la seguridad nacional a través de un programa de vigilancia masiva. Un ataque de una entidad desconocida le lleva a cuestionarse si el gobierno le está ocultando algo a él... y al resto del mundo.',
        popularity: 509.1105,
        poster_path: '/fjgSlNGECNgVeMJaOdDAXmGh7ZM.jpg',
        release_date: '2025-07-29',
        title: 'La guerra de los mundos',
        video: false,
        vote_average: 4.339,
        vote_count: 547,
      },
      {
        adult: false,
        backdrop_path: '/fq8gLtrz1ByW3KQ2IM3RMZEIjsQ.jpg',
        genre_ids: [27],
        id: 1038392,
        original_language: 'en',
        original_title: 'The Conjuring: Last Rites',
        overview:
          'Los investigadores de lo paranormal Ed y Lorraine Warren se enfrentan a un último caso aterrador en el que están implicadas entidades misteriosas a las que deben enfrentarse.',
        popularity: 326.662,
        poster_path: '/dyW5mX4wwDoZWgTYObx6pg9V0i9.jpg',
        release_date: '2025-09-03',
        title: 'Expediente Warren: El último rito',
        video: false,
        vote_average: 6.608,
        vote_count: 365,
      },
      {
        adult: false,
        backdrop_path: '/wJ20rOZ1VgkCqv1jeOQB2Brny9k.jpg',
        genre_ids: [27, 9648],
        id: 1078605,
        original_language: 'en',
        original_title: 'Weapons',
        overview:
          'Cuando todos los alumnos de una misma clase, salvo uno, desaparecen misteriosamente la misma noche y exactamente a la misma hora, la pequeña ciudad donde viven se pregunta quién o qué está detrás de su desaparición.',
        popularity: 318.0818,
        poster_path: '/nYqEQ3ltw0hHc1kBaNWr7Rb8WNZ.jpg',
        release_date: '2025-08-04',
        title: 'Weapons',
        video: false,
        vote_average: 7.39,
        vote_count: 1429,
      },
      {
        adult: false,
        backdrop_path: '/mEW9XMgYDO6U0MJcIRqRuSwjzN5.jpg',
        genre_ids: [28, 53],
        id: 1007734,
        original_language: 'en',
        original_title: 'Nobody 2',
        overview:
          'Cuatro años después de enfrentarse involuntariamente a la mafia rusa, Hutch Mansell sigue intentando saldar una deuda de 30 millones de dólares con golpes a criminales internacionales. Agotado y distanciado de su familia, organiza unas vacaciones con su esposa e hijos en Plummerville, el lugar donde solía ir con su hermano de niño. Pero un pequeño altercado los convierte en el objetivo de un peligroso mafioso local y de su corrupto sheriff, poniendo en riesgo toda la familia.',
        popularity: 291.5721,
        poster_path: '/qwdBh0102NX5fslXv3L9MSlXqKc.jpg',
        release_date: '2025-08-13',
        title: 'Nadie 2',
        video: false,
        vote_average: 7.3,
        vote_count: 568,
      },
      {
        adult: false,
        backdrop_path: '/eU7IfdWq8KQy0oNd4kKXS0QUR08.jpg',
        genre_ids: [878, 12, 28],
        id: 1061474,
        original_language: 'en',
        original_title: 'Superman',
        overview:
          'En un mundo que ha perdido la fe en la bondad, Superman lucha por reconciliar su herencia kryptoniana con los valores humanos que moldearon su carácter. Criado en la Tierra, representa la verdad, la justicia y el estilo americano, pero debe enfrentarse a un mundo cínico que cuestiona sus ideales. Entre el deber de proteger a la humanidad y la búsqueda de su identidad, Superman demuestra que la esperanza y la bondad nunca pasan de moda, incluso en los tiempos más oscuros, inspirando a otros a creer en un futuro mejor.',
        popularity: 233.0212,
        poster_path: '/fvUJb08yatV2b3NUSwuYdQKYoFd.jpg',
        release_date: '2025-07-09',
        title: 'Superman',
        video: false,
        vote_average: 7.506,
        vote_count: 3187,
      },
      {
        adult: false,
        backdrop_path: '/or8y8JFF0vR3N9ap0Vdhf9tfTxQ.jpg',
        genre_ids: [28, 80],
        id: 1028248,
        original_language: 'en',
        original_title: 'As Good as Dead',
        overview:
          'Bryant (Michael Jai White), un hombre con un pasado misterioso, se muda a un pequeño pueblo fronterizo mexicano para empezar de nuevo y vivir una vida sencilla. Mientras está allí, se hace amigo de mala gana de un adolescente local con problemas que recientemente perdió a su madre y está siendo reclutado por la pandilla callejera local.',
        popularity: 223.2352,
        poster_path: '/niTXgu5Ydz64KkanuPqkppfW5gI.jpg',
        release_date: '2022-12-16',
        title: 'As Good As Dead. Ahora más peligroso',
        video: false,
        vote_average: 6.362,
        vote_count: 65,
      },
      {
        adult: false,
        backdrop_path: '/JMlVj6X2F1PuDz9OyHShThzpa2.jpg',
        genre_ids: [28, 80, 53],
        id: 1369679,
        original_language: 'en',
        original_title: 'Get Fast',
        overview:
          'Cuando secuestran a su compañero de fechorías después de un robo masivo, un famoso ladrón profesional sigue la pista de los secuestradores hasta el territorio de un despiadado capo de la droga, perseguido por policías corruptos, compinches de bajo nivel y el sicario más letal del sindicato del crimen, un sociópata amante de las armas y fríamente encantador conocido como El Vaquero. Pero con millones de dólares y muchas vidas en juego, ¿cuánto durará la lealtad entre ladrones cuando empiecen a volar las balas?',
        popularity: 177.148,
        poster_path: '/kK0ZgJINxy50AkVbCsTRIX0DvbZ.jpg',
        release_date: '2024-12-12',
        title: 'Velocidad total',
        video: false,
        vote_average: 6.2,
        vote_count: 21,
      },
      {
        adult: false,
        backdrop_path: '/kzeBfhXMRWiykBsqoL3UbfaM0S.jpg',
        genre_ids: [35, 28, 80],
        id: 1035259,
        original_language: 'en',
        original_title: 'The Naked Gun',
        overview:
          'El torpe teniente Frank Drebin Jr. intenta resolver un asesinato vinculado a un magnate tecnológico. Mientras investiga, su unidad policial corre peligro de ser cerrada. Con la ayuda de una escritora de crímenes, Frank se verá envuelto en situaciones tan absurdas como explosivas. Película reboot basada en la popular franquicia de comedia "Agárralo como puedas" y la serie de televisión "Police Squad!".',
        popularity: 193.4393,
        poster_path: '/Mu73AnUmBpSI8W0bNCgaCVwzOa.jpg',
        release_date: '2025-07-30',
        title: 'Agárralo como puedas',
        video: false,
        vote_average: 6.7,
        vote_count: 687,
      },
      {
        adult: false,
        backdrop_path: '/rzGHVq2BCMwjp93QaKYoLPSaSrp.jpg',
        genre_ids: [28, 14, 12, 9648],
        id: 506763,
        original_language: 'zh',
        original_title: '狄仁杰之四大天王',
        overview:
          'Como recompensa a sus méritos y astucia, el Emperador confía al detective Dee un mazo que da autoridad sobre cualquier persona que amenace la seguridad nacional, incluida la realeza. La Emperatriz sabe que este objeto pone en peligro el equilibrio de poder en la corte, por lo que tratará de hacerse con él, activando una red de conspiraciones que serán solamente la punta del iceberg de la aventura más espectacular del icónico Dee.',
        popularity: 191.4668,
        poster_path: '/lVhgQfBG2B3mXtN807qqsr6ni7l.jpg',
        release_date: '2018-07-27',
        title: 'Detective Dee y los cuatro reyes celestiales',
        video: false,
        vote_average: 6.215,
        vote_count: 200,
      },
      {
        adult: false,
        backdrop_path: '/mwI1OarF7BVWwn5O1Ng73UhyctP.jpg',
        genre_ids: [27, 878, 53],
        id: 914215,
        original_language: 'en',
        original_title: 'Humane',
        overview:
          'A raíz de un colapso ambiental que está obligando a la humanidad a deshacerse del 20 % de su población, una cena familiar estalla en caos cuando un padre anuncia su plan de de enrolarse en el nuevo programa de eutanasia del gobierno.',
        popularity: 177.9702,
        poster_path: '/ecOvKaoM1hwQbp0uTnULGrSV32e.jpg',
        release_date: '2024-04-26',
        title: 'Humane',
        video: false,
        vote_average: 5.398,
        vote_count: 161,
      },
      {
        adult: false,
        backdrop_path: '/ZtcGMc204JsNqfjS9lU6udRgpo.jpg',
        genre_ids: [28, 18],
        id: 911430,
        original_language: 'en',
        original_title: 'F1',
        overview:
          'El mítico piloto Sonny Hayes vuelve de su retiro, persuadido para liderar un equipo de Fórmula 1 en apuros y guiar a su joven promesa, en busca de una nueva oportunidad de éxito.',
        popularity: 171.1139,
        poster_path: '/yKIG63pXN89EfbTA7yKpwxAU1rf.jpg',
        release_date: '2025-06-25',
        title: 'F1 la película',
        video: false,
        vote_average: 7.8,
        vote_count: 2107,
      },
      {
        adult: false,
        backdrop_path: '/zNriRTr0kWwyaXPzdg1EIxf0BWk.jpg',
        genre_ids: [878, 12, 28],
        id: 1234821,
        original_language: 'en',
        original_title: 'Jurassic World Rebirth',
        overview:
          'Cinco años después de los eventos de "Dominion", la ecología del planeta ha demostrado ser insoportable para los dinosaurios, donde los pocos que quedan viven aislados en las regiones ecuatoriales. Zora Bennett es contratada para dirigir a un equipo de especialistas cuyo objetivo es conseguir el material genético de las tres criaturas más grandes, las cuales tienen en su ADN la clave para fabricar un medicamento que aportará grandes beneficios a la humanidad. Pero la operación se cruzará con una familia cuyo barco volcó y todos acabarán en una isla prohibida ocupada por dinosaurios de numerosas especies, donde tendrán que hacer lo imposible para sobrevivir.',
        popularity: 159.0512,
        poster_path: '/2sbGd7kDhMicDkT097FR9a2JyGU.jpg',
        release_date: '2025-07-01',
        title: 'Jurassic World: El renacer',
        video: false,
        vote_average: 6.397,
        vote_count: 2115,
      },
      {
        adult: false,
        backdrop_path: '/538U9snNc2fpnOmYXAPUh3zn31H.jpg',
        genre_ids: [28, 12, 53],
        id: 575265,
        original_language: 'en',
        original_title: 'Mission: Impossible - The Final Reckoning',
        overview:
          'El agente Ethan Hunt continúa su misión de impedir que Gabriel controle el tecnológicamente omnipotente programa de IA conocido como "the Entity".',
        popularity: 158.7828,
        poster_path: '/haOjJGUV00dKlZaJWgjM1UD1cJV.jpg',
        release_date: '2025-05-17',
        title: 'Misión: Imposible - Sentencia final',
        video: false,
        vote_average: 7.287,
        vote_count: 1738,
      },
      {
        adult: false,
        backdrop_path: '/w3Bi0wygeFQctn6AqFTwhGNXRwL.jpg',
        genre_ids: [16, 35, 14, 10402],
        id: 803796,
        original_language: 'en',
        original_title: 'KPop Demon Hunters',
        overview:
          'Cuando no están llenando estadios, las superestrellas del K-pop Rumi, Mira y Zoey usan sus poderes secretos para proteger a sus fans de una amenaza sobrenatural.',
        popularity: 150.7267,
        poster_path: '/swQRKmW7RLhncPYHvM0RHz8b7bT.jpg',
        release_date: '2025-06-20',
        title: 'Las guerreras k-pop',
        video: false,
        vote_average: 8.314,
        vote_count: 1427,
      },
      {
        adult: false,
        backdrop_path: '/vHTFrcqJoCi1is3XN0PZe2LSnI2.jpg',
        genre_ids: [14, 10751, 28, 12],
        id: 1087192,
        original_language: 'en',
        original_title: 'How to Train Your Dragon',
        overview:
          'En la escarpada isla de Mema, donde vikingos y dragones han sido enemigos acérrimos durante generaciones, Hipo se desmarca desafiando siglos de tradición cuando entabla amistad con Desdentao, un temido dragón Furia Nocturna. Su insólito vínculo revela la verdadera naturaleza de los dragones y desafía los cimientos de la sociedad vikinga.',
        popularity: 149.1822,
        poster_path: '/kjQXYc2Abhy3TBgAZGzJRhN1JaV.jpg',
        release_date: '2025-06-06',
        title: 'Cómo entrenar a tu dragón',
        video: false,
        vote_average: 8.034,
        vote_count: 1915,
      },
      {
        adult: false,
        backdrop_path: '/6nCy4OrV7gxhDc3lBSUxkNALPej.jpg',
        genre_ids: [28, 36, 18, 12, 10752],
        id: 1051486,
        original_language: 'en',
        original_title: 'Stockholm Bloodbath',
        overview:
          'En 1520, el rey danés Cristián II intenta arrebatar la corona sueca mientras las hermanas Freja y Anne juran vengar el asesinato de su familia. Su camino las lleva al centro de una sangrienta lucha política entre Suecia y Dinamarca que culminará en el brutal Baño de Sangre de Estocolmo.',
        popularity: 148.8558,
        poster_path: '/8hrrdAShrWXCnZn8qRQS2h9L7vg.jpg',
        release_date: '2024-01-19',
        title: 'Estocolmo 1520. El rey Tirano',
        video: false,
        vote_average: 6.2,
        vote_count: 32,
      },
      {
        adult: false,
        backdrop_path: '/uBB1aMga5ngZxsUQL5k36zeW3pB.jpg',
        genre_ids: [27],
        id: 1242011,
        original_language: 'en',
        original_title: 'Together',
        overview:
          'Una pareja con problemas en su relación se muda al campo, donde descubren una cueva con una fuerza sobrenatural. Al beber agua de la cueva, comienzan a experimentar transformaciones físicas y emocionales que reflejan su codependencia.',
        popularity: 148.6383,
        poster_path: '/pp2ho64ah9W9jCCIHavXUCuqISr.jpg',
        release_date: '2025-07-28',
        title: 'Together: Juntos hasta la muerte',
        video: false,
        vote_average: 7.142,
        vote_count: 440,
      },
      {
        adult: false,
        backdrop_path: '/7FTOVQO3pndOuswVS3iNt3odVq5.jpg',
        genre_ids: [27],
        id: 691363,
        original_language: 'fr',
        original_title: 'La Chose Derrière La Porte',
        overview:
          'Una joven, Adèle, está literalmente atormentada por la muerte de su marido, Jean, asesinado en una trinchera durante la Primera Guerra Mundial. Desesperada e incapaz de afrontar esta trágica pérdida, Adèle recurre a la magia negra con la esperanza de recuperar a su amante.',
        popularity: 140.3619,
        poster_path: '/lGlYPD5AVINwSbTroS3mOltp2nk.jpg',
        release_date: '2023-01-16',
        title: 'The Thing Behind the Door',
        video: false,
        vote_average: 5.524,
        vote_count: 21,
      },
      {
        adult: false,
        backdrop_path: '/a6bItEVaxgphpMswho1wVRerv4r.jpg',
        genre_ids: [28, 12, 53, 80],
        id: 7451,
        original_language: 'en',
        original_title: 'xXx',
        overview:
          'Xander Cage es XXX, un antiguo ganador de X-Games y atleta profesional de deportes de extremo, que sobrevive vendiendo videos de sus increíbles hazañas, las cuales hacen emitir adrenalina por todo el cuerpo. Pero después de incontables encuentros con la ley, su mundo está a punto de tomar un rumbo aún más extremo... Porque Xander no sabe que ha sido "espiado" por Augustus Gibbons, un agente veterano de la Agencia Nacional de Seguridad que se encuentra en una desesperada situación en la distante ciudad de Praga, en donde su operativo secreto ha sido asesinado por una pandilla de mafiosos con un estilo muy propio, que se llaman así mismos Anarchy 99, encabezados por el brutal ex-Comandante del Ejército Ruso Yorgi.',
        popularity: 126.9544,
        poster_path: '/gd4hRY3pFXRY7YVbMdVBpnKV7wC.jpg',
        release_date: '2002-08-09',
        title: 'xXx',
        video: false,
        vote_average: 5.961,
        vote_count: 4546,
      },
    ],
    total_pages: 52551,
    total_results: 1051006,
  };

  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=es-ES';

  privateapiKey = import.meta.env['VITE_TMDB_API_KEY'];

  getFilms(page: Signal<number>): ResourceRef<FilmsResponse | undefined> {
    return httpResource<FilmsResponse>(() => ({
      url: `${this.apiUrl}'&page=${page()}'`,
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmRkOGMwZmUzY2MwNGVkZGMxOWZmYTFkZjJmMmM3NCIsIm5iZiI6MTc1ODEwMDI3Ny4xNTkwMDAyLCJzdWIiOiI2OGNhN2IzNTIwZmYwZWIyNjVlMzYyM2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bzlnEE7F7IxBtAtaeX2zgWbS_6rckMnlmmK5pLpMPkc`,
      },
    }));
  }
}
