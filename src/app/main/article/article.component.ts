import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article.model';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  categories: string[] = ['POPULARES', 'CONSEJOS', 'NUTRICIÓN', 'SALUD', 'ENTRETENIMIENTO', 'ESTILO DE VIDA'];
  public articleList: Article[] = [{
    id: '1',
    type: 'article',
    category: 'consejos',
    color: '#d1e8eb',
    content: '<p>here must be something</p>',
    tags: [
      'dummies',
      'care',
      'basic'
    ],
    timestamp: '2018-06-11T20:10:00.000Z',
    title: 'El hospital de las mascotas',
    description: 'Atiende de lunes a lunes de manera gratuita.',
    author: 'Eduardo Macchiavelli',
    authorDescription: 'Eduardo Macchiavelli', blog: 'Padres Primerizos',

    cover: '../assets/img/dog_3.jpg',

  }, {
    id: '2',
    type: 'article',
    category: 'consejos',
    color: '#d1e8eb',
    content: '<p>here must be something</p>',
    tags: [
      'dummies',
      'care',
      'basic'
    ],
    timestamp: '2018-06-11T20:10:00.000Z',
    title: 'Diabetes en gatos y otros',
    description: 'Atiende de lunes a lunes de manera gratuita.',
    author: 'Eduardo Macchiavelli',
    authorDescription: 'Eduardo Macchiavelli', blog: 'Padres Primerizos',

    cover: '../assets/img/dog_.jpg',

  }, {
    id: '3',
    type: 'article',
    category: 'consejos',
    color: '#d1e8eb',
    content: '<p>here must be something</p>',
    tags: [
      'dummies',
      'care',
      'basic'
    ],
    timestamp: '2018-06-11T20:10:00.000Z',
    title: 'Jornada de medicina ',
    description: 'Atiende de lunes a lunes de manera gratuita.',
    author: 'Eduardo Macchiavelli',
    authorDescription: 'Eduardo Macchiavelli', blog: 'Padres Primerizos',

    cover: '../assets/img/dog_2.jpg',

  }];
  // article: Article;
  theHtmlString: string;

  article: Article = {
    id: '1',
    type: 'article',
    category: 'Consejos',
    color: '#d1e8eb',
    content: '<div >\n' +
    '  <h1>9 consejos para padres de mascotas primerizos</h1>\n' +
    '  \n' +
    '  <p >Tener una mascota es algo que se ha puesto de moda, y que todas y todos queremos hacer. Por que quién no quiere alguien que lo este esperando en su casa, y que con el simple hecho de escucharte, corra con toda la felicidad del mundo a tus brazos y que con ese simple abrazo te llene de amor. Sin embargo, esto no se debe tomar como un juego, una mascota es un ser vivo y como tal tiene necesidades, y tú como su protector antes que su amigo tienes la responsabilidad de cubrirlas.</p><p>Así que si estás pensando en tener una mascota, pero no estás seguro de lo que involucra, o ya tienes una pero no sabes qué tienes que hacer para ser un mejor padre… aquí te traemos un pequeño manual de cosas que debes de hacer con o para tu amigo peludo.</strong></p><p>1. Darles de comer. Primero lo obvio y lo más importante, las mascotas comen? sí, también comen! Si es un cachorro, este va a comer sin parar por lo que deberás racionar su comida tres veces al día y si es adulto bastará con una sola vez, mientras que su botecito de agua deberá estar lleno siempre, recuerda mantener sus platos limpios a nadie le gusta comer en un plato sucio, insectos como hormigas o gusanos pueden tratar de ganar le su alimento y tal vez no le guste la competencia.</p>\n' +
    '<img  style="width: 85%;margin-left: 8%;" src="https://cdn-images-1.medium.com/max/1600/1*uzpAmaWY62nsa7YcjRZp2w.gif">' +
    '<p>2. Tus mascotas te necesitan. Es increíble llegar cansado a tu casa después del día más largo de tu vida, y saber que hay alguien que te ha estado esperando todo el día, pero ellas como tú necesitan atención, por lo que es importante pasar tiempo con ellas y hacerles sentir nuestro cariño y amor. Y como cualquier padre, también hay que aprender a poner límites y a dejar claro quien es el amo.</p>\n' +
    '<p>3. Visita regularmente al veterinario. Es importante hacer un chequeo aproximadamente cada 6 meses. La salud de nuestras mascotas es algo que siempre debe estar en nuestra mente, muchas veces podemos pasar síntomas por alto que no parecen nada graves, cosas fáciles de notar como problemas al andar o cambio en el apetito, y cosas un poco más difíciles de notar pero como dueños deberíamos de darnos cuenta como cambios de estado de animo, estos síntomas pueden desembocar en problemas graves, así que más vale prevenir.\n' +
    '<p>4.Hagan ejercicio juntos. Si estás buscando el pretexto perfecto para pararte temprano y salir a dar una vuelta en las mañanas antes de salir para el trabajo o antes de acostarte, consigue una mascota, ya sea salir a correr con ella, o estar una hora en el parque aventándole una rama o simplemente pasear para conocer los parques y calles de tu colonia, es importante que se ejerciten para tener una vida más saludable y feliz. Esto es un poco especifico para perros, pero si tienes a un gato que le gusta pasear, cuida lo vale oro.</p>\n' +
    '<img src="https://cdn-images-1.medium.com/max/1600/1*Wx1QLtmdm-wVdYf0EEP8cg.jpeg"  style="width: 85%;margin-left: 8%;">\n' +
    '<p>5. Ten una rutina. Las mascotas adoooooran las rutinas, los hace sentir seguros, pues les gusta saber cuando es hora de jugar, de tomar una siesta o de salir a pasear; cosas como el sonido de un sobre o una lata abriéndose en una hora determinada les abre el apetito y dan por hecho que es para ellos. Tener una rutina ayuda a controlar su temperamento y a tener una relación mucho más estrecha con el o ella.</p>\n' +
    '<p >6. Acicalalos. Una buena forma de darles la atención que necesitan y mantenerlos limpios es lavando sus dientes, cepillando su pelo, cortando sus uñas y bañándolos cotidianamente. Dependiendo de la raza y tamaño de mascotas, algunas pueden necesitar cuidados específicos como cepillos especiales, o un mantenimiento más seguido como cortes de pelo cada mes, ten en cuenta esto al conseguir una nueva mascota, trata siempre de asesorarte con un especialista para saber que mascota te conviene más.</p>\n' +
    '<img src="https://cdn-images-1.medium.com/max/1600/1*uAecCT4gsUYsrBFJe7Bn7w.jpeg"  style="width: 85%;margin-left: 8%;">\n' +
    '<p>7. Desparacítalos. Sabemos que le vas a dar la mejor comida que exista en el mercado sin embargo no siempre sabemos que se meten a la boca o con que otras mascotas estén en contacto, los gatos y perros deben tratarse contra parásitos internos cada 3 meses, y más cuando son cachorros y antes de vacunarse.</p>\n' +
    '<p>8. Vacúnalos: A nadie le gustan las inyecciones pero sabemos que son súper necesarias para evitar enfermedades como: parvovirosis, moquillo o hepatitis canina en el caso de los perros y otras como calicivirus, panleucopenia, rinotraqueítis en el caso de los gatitos es importante.</p>\n' +
    '<p >9. Considera esterilizarlos: Los veterinarios recomiendan esterilizar a tu mascota, si la razón es tener a un nuevo integrante en la familia, existen muchos perritos y gatitos abandonados y sería mejor darles un hogar a ellos que lo necesitan. De igual forma la esterilización disminuye el comportamiento agresivo en los machos, pero tienes que hacer lo antes de que lleguen a cierta edad, que depende de la raza, comportamientos como las peleas con otros perros, las fugas de casa, incluso tendencias como marcar con orina o montar tienden a atenuarse. En el caso de las hembras elimina el celo, la posibilidad de pseudogestación, reduce la incidencia de tumores de mama, así como los maullidos y otras conductas propias del celo. Esta operación no provoca cambios de humor en el animal y resulta ser muy común y sin riesgos.</p>\n' +
    '<p >Esperamos que estos consejos les sirvan a nuestros papás primerizos, si tienen consejos que quieran compartir todos sus comentarios son bienvenidos en la siguiente sección.&nbsp;!Gracias!</p>\n' +
    '</div>',
    tags: [
      'dummies',
      'care',
      'basic'
    ],
    timestamp: '2018-06-11T20:10:00.000Z',
    title: 'El hospital de las mascotas',
    description: 'Atiende de lunes a lunes de manera gratuita.',
    author: 'Vpet',
    blog: 'Padres Primerizos',
    authorDescription: 'Estamos dedicados a ayudar a los amantes de mascotas a encontrar los mejores servicios y especialistas en animales.',
    cover: 'who let you',

  };

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => this.getArticleById(params.id));

  }

  getArticleById(id: string) {
    // this.articleService.getById(id).subscribe(article => this.article = article);
  }


}
