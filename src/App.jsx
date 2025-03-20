import styled from '@emotion/styled'
import { useState } from 'react'

const gearItems = [
  {
    id: 1,
    name: 'Camping Tent (4-Person)',
    description: '4-person tent, waterproof, perfect for family camping',
    category: 'Shelter',
    availability: true,
    image: '/images/placeholder.svg',
    accessLevel: 'friends'
  },
  {
    id: 2,
    name: 'Solo Tent',
    description: 'Lightweight single-person tent, perfect for backpacking',
    category: 'Shelter',
    availability: true,
    image: '/images/placeholder.svg',
    accessLevel: 'close friends'
  },
  {
    id: 3,
    name: 'Hiking Boots',
    description: 'Size 43, well maintained, great ankle support',
    category: 'Footwear',
    availability: true,
    image: '/images/placeholder.svg',
    accessLevel: 'friends'
  },
  {
    id: 4,
    name: 'Expedition Backpack (60L)',
    description: 'Large capacity backpack, perfect for long trips',
    category: 'Bags',
    availability: true,
    image: '/images/placeholder.svg',
    accessLevel: 'close friends'
  },
  {
    id: 5,
    name: 'Daypack (42L)',
    description: 'Mid-size backpack, ideal for weekend trips',
    category: 'Bags',
    availability: true,
    image: '/images/placeholder.svg',
    accessLevel: 'friends'
  },
  {
    id: 6,
    name: 'Camping Stove',
    description: 'Portable gas stove, dual burner, includes carrying case',
    category: 'Cooking',
    availability: true,
    image: '/images/placeholder.svg',
    accessLevel: 'close friends'
  },
  {
    id: 7,
    name: 'Insta360 Camera',
    description: '360-degree camera, perfect for adventure photography',
    category: 'Electronics',
    availability: true,
    image: '/images/placeholder.svg',
    accessLevel: 'experts only'
  },
  {
    id: 8,
    name: 'Outdoor Adventure Books',
    description: 'Collection of hiking and camping guides',
    category: 'Books',
    availability: true,
    image: '/images/placeholder.svg',
    accessLevel: 'friends'
  },
  {
    id: 9,
    name: 'Cycle Touring Bags',
    description: 'Set of waterproof panniers and handlebar bag',
    category: 'Bags',
    availability: true,
    image: '/images/placeholder.svg',
    accessLevel: 'close friends'
  }
]

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
  object-fit: cover;
  border: 3px solid #4A5568;
`

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: bold;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #718096;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #f0f0f0;
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
`

const CardDescription = styled.p`
  color: #718096;
  margin-bottom: 1rem;
`

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => props.available ? '#C6F6D5' : '#FED7D7'};
  color: ${props => props.available ? '#22543D' : '#822727'};
  margin-right: 0.5rem;
`

const AccessLevel = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => {
    switch(props.level) {
      case 'friends': return '#BEE3F8';
      case 'close friends': return '#B794F4';
      case 'experts only': return '#F687B3';
      default: return '#E2E8F0';
    }
  }};
  color: ${props => {
    switch(props.level) {
      case 'friends': return '#2C5282';
      case 'close friends': return '#553C9A';
      case 'experts only': return '#702459';
      default: return '#2D3748';
    }
  }};
`

const Footer = styled.footer`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  color: #718096;
  font-style: italic;
`

function App() {
  return (
    <Container>
      <ProfileSection>
        <ProfileImage src="/images/profile-placeholder.svg" alt="Profile" />
      </ProfileSection>

      <Header>
        <Title>Lendem, Just old dream but now this is JUST FOR FUN</Title>
        <Subtitle>
          You're welcome to borrow these things from me! 😊 But this page is just for my friends. 
          If we're friends, send me a DM on Telegram to ask. That said, I do lend certain items 
          to specific people only—I'm sure you get why! 😆
        </Subtitle>
      </Header>
      
      <Grid>
        {gearItems.map(item => (
          <Card key={item.id}>
            <CardImage src={item.image} alt={item.name} />
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge available={item.availability}>
                  {item.availability ? 'Available' : 'Currently Shared'}
                </Badge>
                <AccessLevel level={item.accessLevel}>
                  {item.accessLevel}
                </AccessLevel>
              </div>
            </CardContent>
          </Card>
        ))}
      </Grid>

      <Footer>
        Built entirely by AI—zero human code involved! 🚀
      </Footer>
    </Container>
  )
}

export default App