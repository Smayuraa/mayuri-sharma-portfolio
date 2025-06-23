import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 520px;
  background: linear-gradient(145deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.cardAlt || "#1a1a1a"});
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
    filter: brightness(1.08);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.primary + "22"};
  color: ${({ theme }) => theme.primary};
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 12px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin: 4px 0 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 12px;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.card};
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-left: -10px;
  &:first-child {
    margin-left: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.a`
  padding: 8px 14px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark || "#0056b3"};
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <BottomRow>
        <Members>
          {project.member?.map((member, i) => (
            <Avatar key={i} src={member.img} alt={`Member ${i}`} />
          ))}
        </Members>
        <ButtonContainer>
          <Button href={project.github} target="_blank">Code</Button>
          <Button href={project.webapp} target="_blank">Live</Button>
        </ButtonContainer>
      </BottomRow>
    </Card>
  );
};

export default ProjectCard;
