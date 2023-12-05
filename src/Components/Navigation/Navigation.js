import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaSignInAlt, FaGoogle, FaSearch, FaHeart, FaShoppingBasket, FaHeartBroken, FaRegHeart } from 'react-icons/fa';

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
  height: 90px;
`;

const LeftItems = styled.div`
  display: flex;
  align-items: center;
`;

const CenterItems = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const NotificationBadge = styled.span`
  color: white;
  padding: 0px 3px 2px 0;
  border-radius: 50%;
  margin-left: 5px;
`;


const ClickableItem = styled.a`
  cursor: pointer;
  margin-right: 10px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


const Navigation = () => {
  return (
    <NavigationContainer>
      
      <LeftItems>
      <ClickableItem href="#">Test1</ClickableItem>
        <ClickableItem href="#">Test2</ClickableItem>
        <ClickableItem href="#">Test3</ClickableItem>
        <ClickableItem href="#">Test4</ClickableItem>
        <ClickableItem href="#">Test5</ClickableItem>  

      </LeftItems>
      

      <CenterItems>
        
        <ClickableItem href="#">CHOCOLAT</ClickableItem>

      </CenterItems>


      <RightItems>

        <Icon>
          <FaSearch />
        </Icon>

        
        <span style={{ fontSize: '18px' }}>User</span>
        <Icon>
          <FaUser />
        </Icon>

        <Icon>
          <FaShoppingBasket />
        </Icon>
        <NotificationBadge>2</NotificationBadge>

        <Icon>
          <FaRegHeart />
        </Icon>
        <NotificationBadge>2</NotificationBadge>

      </RightItems>
    </NavigationContainer>
  );
};

export default Navigation;
