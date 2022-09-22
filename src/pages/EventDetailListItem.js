import styled from "styled-components";
import PropTypes from "prop-types";
import { FiChevronRight } from "react-icons/fi";

const EventDetailListItem = ({ icon, title, content }) => {
  return (
    <StyledListItem>
      <StyledIconContainer>{icon}</StyledIconContainer>

      <StyledContentContainer>
        <StyledListItemTitle>{title}</StyledListItemTitle>
        <StyledListItemContent>{content}</StyledListItemContent>
      </StyledContentContainer>

      <FiChevronRight />
    </StyledListItem>
  );
};

EventDetailListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default EventDetailListItem;

// ========= Start styled-components ==========
const StyledListItem = styled.div(
  ({ theme: { breakPoints } }) => `
    display: flex;
    align-items: center;

    @media (min-width: ${breakPoints.laptopM}) {
      min-width: 446px;
    }
  `
);
const StyledIconContainer = styled.div(
  ({ theme: { colors, breakPoints } }) => `
    width: 48px;
    height: 48px;
    background: ${colors.white};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${breakPoints.tabletM}) {
      width: 56px;
      height: 56px;
    }
  `
);
const StyledContentContainer = styled.div`
  margin-left: 20px;
  flex: 1;
`;
const StyledListItemTitle = styled.div(
  ({ theme: { colors, breakPoints } }) => `
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: ${colors.violentViolet};

    @media (min-width: ${breakPoints.tabletM}) {
      font-size: 18px;
      line-height: 21px;
    }
  `
);
const StyledListItemContent = styled.div(
  ({ theme: { colors, breakPoints } }) => `
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.emperor};
    margin-top: 3px;

    @media (min-width: ${breakPoints.tabletM}) {
      font-size: 18px;
      line-height: 21px;
    }
  `
);
// ========= End styled-components ==========
