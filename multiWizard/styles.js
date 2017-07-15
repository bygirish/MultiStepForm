import { TITLE_COLOR } from './../constants';
import { BODY_COLOR } from './../constants';
import { FOOTER_COLOR } from './../constants';

import { HEADER_TEXT } from './../constants';
import { TITLE_BACKGROUND_COLOR } from './../constants';

import { TITLE_CONTAINER_HEIGHT } from './../constants';
import { BODY_HEIGHT } from './../constants';
import { FOOTER_HEIGHT } from './../constants';



const theme = {
  titleColor: TITLE_COLOR,
  bodyColor: BODY_COLOR,
  footerColor: FOOTER_COLOR,

  titleContainerHeight: TITLE_CONTAINER_HEIGHT,
  bodyHeight: BODY_HEIGHT,
  footerHeight: FOOTER_HEIGHT,
}

export default styles = {

  titleBackgroundColor: TITLE_BACKGROUND_COLOR,

  headerText: HEADER_TEXT,

  headingStyle: {
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },

  formStepsStyle: {
    flexDirection: 'row',
    backgroundColor: theme.titleColor,
    height: theme.titleContainerHeight,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  formComponentStyle: {
    backgroundColor: theme.bodyColor,
    height: theme.bodyHeight,
    marginTop: 10,
  },

  formActionStyle: {
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.footerColor,
    height: theme.footerHeight,
    marginTop: 10,
  },


};
