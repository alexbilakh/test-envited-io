import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

import { EventContext } from "../App";
import EventDetailListItem from "./EventDetailListItem";

const EventDetail = () => {
  const { event } = useContext(EventContext);

  if (!event?.eventName)
    return (
      <StyledNoEventContainer>
        <h1>No Event Data yet.</h1>

        <Link to="/" className="btn">
          Go back to Home Page
        </Link>
      </StyledNoEventContainer>
    );

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledEventPhoto src={event.eventPhoto} alt={event?.eventName} />

        <StyledContentContainer>
          <StyledEventName>{event.eventName}</StyledEventName>
          <StyledHoster>
            Hosted by <strong>{event.hostName}</strong>
          </StyledHoster>

          <StyledListItemsContainer>
            <EventDetailListItem
              icon={<FaCalendarAlt />}
              title={event.startTime}
              content={event.endTime}
            />
            <EventDetailListItem
              icon={<GoLocation />}
              title={event.address1}
              content={event.address2}
            />
          </StyledListItemsContainer>
        </StyledContentContainer>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default EventDetail;

// ========= Start styled-components ==========
const StyledNoEventContainer = styled.div(
  ({ theme: { colors } }) => `
    text-align: center;
    padding: 50px 50px;
    background-color: ${colors.magnoliaLight};
    min-height: 100vh;
  `
);
const StyledWrapper = styled.div(
  ({ theme: { colors, breakPoints } }) => `
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: ${colors.magnoliaLight};

    @media (min-width: ${breakPoints.tabletS}) {
      align-items: center;
    }
  `
);
const StyledContainer = styled.div(
  ({ theme: { breakPoints } }) => `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakPoints.tabletS}) {
      max-width: 593px;
    }
    @media (min-width: ${breakPoints.laptopM}) {
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: 100px 125px;
      column-gap: 90px;
      max-width: 1280px;
      margin: 0 auto;
      align-items: flex-start;
    }
  `
);
const StyledContentContainer = styled.div`
  padding: 11px 20px;
`;
const StyledEventPhoto = styled.img(
  ({ theme: { breakPoints } }) => `
    width: 100%;

    @media (min-width: ${breakPoints.laptopM}) {
      width: 500px;
      flex: none;
    }
  `
);
const StyledEventName = styled.h3(
  ({ theme: { colors, breakPoints } }) => `
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: ${colors.violentViolet};
    margin: 0px;

    @media (min-width: ${breakPoints.tabletS}) {
      font-size: 48px;
      line-height: 55px;
    }
  `
);
const StyledHoster = styled.div(
  ({ theme: { colors, breakPoints } }) => `
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.gray};
    margin-top: 5px;

    @media (min-width: ${breakPoints.tabletS}) {
      font-size: 18px;
      line-height: 21px;
      margin-top: 17px;
    }
  `
);
const StyledListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 30px;
`;
// ========= End styled-components ==========
