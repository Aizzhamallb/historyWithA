import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OutstandingPeople() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div id="outstanding-block">
        <Card   style={{ marginLeft: "50px" }} sx={{ maxWidth: 300 }}>
          <CardHeader
            style={{ color: "#660000", fontWeight: "500" }}
            title="Барс-Бег"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://static.akipress.org/127/.storage/usernews/images/history/2016/64fde23ecbfde55c51d94f4e43bdc843.jpg"
            alt=""
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#660000" }}>
              Барс-бек - Ынанчу Алп Бильге - правитель кыргызского государства
              на Енисее, выходец из древней кыргызской правящей династии.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
            
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Род Барсбека находился под особым покровительством божества
                Умай-Эне. Его родственники носили редкий титул «Умайбег».
                Обладал незаурядными личными качествами, благодаря которым он
                смог возглавить кыргызское государство в сложных
                внешнеполитических условиях — условиях захватнических
                устремлений Второго Восточно-Тюркского каганата. С целью борьбы
                с тюрками к 709 году в результате успешных дипломатических
                усилий он организовал антитюркскую коалицию, в состав которой,
                кроме кыргызов, вошли империя Тан и Тюргешский каганат. Однако
                каган восточных тюрок Капаган опередил действия союзников и
                первым, внезапно напал на кыргызов. В 711 году Барс-бек погиб в
                бою. 1/3 3. Ж.Баласагуни и его поэма «Кутадгу билиг»
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card  sx={{ maxWidth: 300 }}>
          <CardHeader
            style={{ color: "#660000", fontWeight: "500" }}
            title="Махмуд Кашгари"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://static.akipress.org/127/.storage/usernews/images/history/2016/fef9cc952d0ee31876aa3b53e3372c51.jpg"
            alt=""
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#660000" }}>
              Махмуд Кашгари и его произведение «Дивану лугат ат тюрк» («Словарь тюркских наречий»). Махмуд Кашгари, как и Ж.Баласагын также является крупнейшим мыслителем и видным ученым XI века.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
              Годы его рождения и смерти не установлены. Родом он с южного побережья Иссык-Куля (Барсган). Позднее он переселился в Кашгар и стал создавать свои труды под именем Махмуда Кашгари. Получил хорошее по тем временам образование в Кашгаре, Бухаре, Самарканде, Нишапуре, Багдаде. Он владел арабским языком, хорошо знал жизнь, обычаи многих тюркских народов. «Словарь тюркских наречий» Махмуда Кашгари представляет собой средневековую энциклопедию жизни тюркских народов, отразившую их быт, этнонимы и топонимы, родоплеменное деление, термины родства, титулы и наименования должностных лиц, названия видов животных и птиц, народный календарь, познания тюрок в области астрономии, и медицины и др. Особый ингерес представляет его круглая карта мира и сведения о социальной структуре общества, об экономике и культуре тюрок. Словарь Махмуда Кашгари - это не только исторический и философский источник, он представляет немалую ценность и как сборник социальнофилософской мысли тюркских народов, отразивший их мировосприятие, этические нормы поведения, уровень мышления людей. 
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            style={{ color: "#660000", fontWeight: "500" }}
            title="Токтогул Сатылганов"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://static.s123-cdn-static-c.com/uploads/2200950/2000_5ce14e356cf91.jpg"
            alt=""
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#660000" }}>
             Токтогул Сатылганов великий акын кыргызского народа (1864-1933гг.). Родился в КетменьТюбинской долине, в селении Сасык-Жийде в семье бедняка. 
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
              Его заслуга заключается в том, что он заложил основы демократического направления акынской поэзии и одним из первых начал распространять идеи свободы и равенства. Становлению его поэтического мастерства способствовал богатый фольклор кыргызского народа, традиционная акынская поэзия. Большое влияние на его мировоззрение и поэтический рост оказали Чонду, Сартбай, Кочбай, Ниязаалы. Уже в своих ранних произведениях он изображает нищету и нужды простого народа («Из-за нищеты»), а также создает лирические песни «Насылкан», «Бакшы кыз», «Алымкан» и др). Особое место в творчестве Токтогула занимают произведения — размышления о тяжелой судьбе простых людей, об их бесправном положении. За эти песни против произвола баев и манапов по ложному доносу недругов царские власти сослали его в Сибирь в 1898 году как участника Андижанского восстания. Страдания узника отражены в его произведениях: «Беркут, парящий над горами», «Страданиям подверглась моя жизнь», «Песня узника» и др. Когда в Кыргызстане победила Советская власть, Токтогул с радостью встретил это событие, отразив свои чувства в таких песнях, как «Ленин открыл дорогу», «Да здравствует Советская власть», «Выше держи свое знамя» и др, в которых выразил идеологию своего времени. Его эпическая поэма «Какая женщина родила такого сына, как Ленин» (1919г.), стала достоянием не только акынской поэзии, но и стала заметным явлением профессиональной национальной поэзии.  
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card  style={{ marginRight: "50px" }} sx={{ maxWidth: 300 }}>
          <CardHeader
            style={{ color: "#660000", fontWeight: "500" }}
            title="Атаке-бий "
          />
          <CardMedia
            component="img"
            height="194"
            image="https://static.s123-cdn-static-c.com/uploads/2200950/2000_5ce14aab752cd.jpg"
            alt=""
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#660000" }}>
               Годы рождения и смерти неизвестны. Известный политический деятель кыргызов второй половины 18 века. Выходец из рода сарыбагыш.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
              В русских исторических источниках именуется «князем». В конце 50-х годов 18 века под предводительством Атаке-бия кыргызы начали освобождать северный Кыргызстан, покинутый ими в конце 20-х годов 18 века под натиском калмаков. При активной поддержке таких кыргызских баатыров, как ЭрСолтоной, Бердике, Кошой, Канай, Жайыл-Баатыр и других он освободил Таласскую, Чуйскую, Кеминскую долину и северную часть Иссык-Куля. Атаке бий вошел в историю как инициатор установления дружественных отношений с Россией, сумевший заручиться покровительством Российской императрицы в условиях отсутствия собственного государства, когда кыргызы со всех сторон были окружены чуждыми государствами, стремившимися завоевать кыргызские земли.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}
