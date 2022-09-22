import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { EventContext } from "../App";

const EventCreate = () => {
  const eventContext = useContext(EventContext);
  const naviagte = useNavigate();

  // Capture on-change event of form inputs
  const onChange = (e) => {
    const newEvent = {
      ...eventContext.event,
      [e.target.name]: e.target.value,
    };

    eventContext.setEvent(newEvent);
  };

  // Capture on-change event of event-picture file input
  const onPhotoChange = (e) => {
    const [file] = e.target?.files;
    if (file) {
      eventContext.setEvent({
        ...eventContext.event,
        eventPhoto: URL.createObjectURL(file),
      });
    }
  };

  // Handle form submit event
  const onSubmit = (e) => {
    e.preventDefault();
    naviagte("/event");
  };

  return (
    <StyledWrapper>
      <StyledHeading>Create an Event</StyledHeading>

      <StyledFormContainer onSubmit={onSubmit}>
        <StyledSideContainer>
          {/* Start event-name */}
          <StyledFormGroup>
            <StyledFormLabel htmlFor="eventName">Event name:</StyledFormLabel>
            <StyledInput
              autoFocus
              id="eventName"
              name="eventName"
              value={eventContext.event?.eventName}
              onChange={onChange}
              required
            />
          </StyledFormGroup>
          {/* End event-name */}

          {/* Start host-name */}
          <StyledFormGroup>
            <StyledFormLabel htmlFor="hostName">Host name:</StyledFormLabel>
            <StyledInput
              id="hostName"
              name="hostName"
              value={eventContext.event?.hostName}
              onChange={onChange}
              required
            />
          </StyledFormGroup>
          {/* End host-name */}

          {/* Start start-time */}
          <StyledFormGroup>
            <StyledFormLabel htmlFor="startTime">Start time:</StyledFormLabel>
            <StyledInput
              id="startTime"
              name="startTime"
              value={eventContext.event?.startTime}
              onChange={onChange}
              type="datetime-local"
              required
            />
          </StyledFormGroup>
          {/* End start-time */}

          {/* Start end-time */}
          <StyledFormGroup>
            <StyledFormLabel htmlFor="endTime">End time:</StyledFormLabel>
            <StyledInput
              id="endTime"
              name="endTime"
              value={eventContext.event?.endTime}
              onChange={onChange}
              type="datetime-local"
              required
            />
          </StyledFormGroup>
          {/* End end-time */}

          {/* Start address1 */}
          <StyledFormGroup>
            <StyledFormLabel htmlFor="address1">Street name:</StyledFormLabel>
            <StyledInput
              id="address1"
              name="address1"
              value={eventContext.event?.address1}
              onChange={onChange}
              required
            />
          </StyledFormGroup>
          {/* End location */}

          {/* Start address2 */}
          <StyledFormGroup>
            <StyledFormLabel htmlFor="address2">
              Suburb, State, Postcode:
            </StyledFormLabel>
            <StyledInput
              id="address2"
              name="address2"
              value={eventContext.event?.address2}
              onChange={onChange}
              required
            />
          </StyledFormGroup>
          {/* End address2 */}
        </StyledSideContainer>

        <StyledSideContainer>
          {/* Start eventPhoto */}
          <StyledFormGroup>
            <StyledFormLabel htmlFor="eventPhoto">Event photo:</StyledFormLabel>
            <StyledInput
              id="eventPhoto"
              name="eventPhoto"
              type="file"
              onChange={onPhotoChange}
              accept="image/png, image/gif, image/jpeg"
              required
            />

            {eventContext.event?.eventPhoto && (
              <StyledPhotoPreviewImage
                src={eventContext.event?.eventPhoto}
                alt="Preview"
              />
            )}
          </StyledFormGroup>
          {/* End eventPhoto */}
        </StyledSideContainer>

        <StyledSubmitButtonContainer>
          <StyledSubmitButton type="submit" className="btn">
            Next
          </StyledSubmitButton>
        </StyledSubmitButtonContainer>
      </StyledFormContainer>
    </StyledWrapper>
  );
};

export default EventCreate;

// ========= Start styled-components ==========
const StyledWrapper = styled.div(
  ({ theme: { colors } }) => `
    width: 100%;
    min-height: 100vh;
    background-color: ${colors.magnolia};
    padding: 60px 20px;
  `
);
const StyledFormContainer = styled.form(
  ({ theme: { breakPoints } }) => `
    width: 100%;
    max-width: 485px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (min-width: ${breakPoints.laptopM}) {
      flex-direction: row;
      column-gap: 30px;
      max-width: 100%;
    }
  `
);
const StyledSideContainer = styled.div(
  ({ theme: { breakPoints } }) => `
    width: 100%;

    @media (min-width: ${breakPoints.laptopM}) {
      max-width: 485px;
    }
  `
);
const StyledHeading = styled.h1(
  ({ theme: { colors, breakPoints } }) => `
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: ${colors.violentViolet};
    margin: 0 0 40px;
    text-align: center;

    @media (min-width: ${breakPoints.tabletM}) {
      font-size: 64px;
      line-height: 64px;
    }
  `
);
const StyledFormGroup = styled.div`
  margin-bottom: 30px;
`;
const StyledFormLabel = styled.label`
  display: block;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 5px;
`;
const StyledInput = styled.input(
  ({ theme: { colors } }) => `
    padding: 8px 12px;
    font-size: 18px;
    border: solid 1px ${colors.mediumPurple};
    border-radius: 3px;
    width: 100%;

    &:focus-visible {
      outline: none;
    }
    &:focus {
      box-shadow: 1px 1px 2px ${colors.gray};
    }
  `
);
const StyledPhotoPreviewImage = styled.img`
  max-width: 100%;
  max-height: 445px;
  margin-top: 25px;
`;
const StyledSubmitButtonContainer = styled.div`
  text-align: center;
  width: 100%;
  max-width: 1000px;
`;
const StyledSubmitButton = styled.button`
  width: 100%;
`;
// ========= End styled-components ==========
