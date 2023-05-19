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
        <Card sx={{ maxWidth: 300 }}>
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
        <Card  style={{ marginRight: "50px" }} sx={{ maxWidth: 300 }}>
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
      </div>
    </>
  );
}
