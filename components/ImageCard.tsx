import {Box, Image, Container, Text, Flex, Tag} from '@chakra-ui/react'
type jpg = {
    webformatURL : string,
    views: number,
    download: number,
    likes:number,
    user:string,
    tags:string
}
function ImageCard({img}:{img:jpg}){
    return <Box boxShadow='lg' borderRadius='xl' maxW='33%' p='16px'>
              <Image src={img.webformatURL} alt="sample photo" borderRadius='xl' />
              <Container>
                <Text fontWeight='bold' color='purple.500' fontSize='xl' mb={2} >Photo by {img.user}</Text>
                <Text><strong>Views: </strong><span>{img.views}</span></Text>
                <Text><strong>Downloads: </strong><span>{img.downloads}</span></Text>
                <Text><strong>Likes: </strong><span>{img.likes}</span></Text>
              </Container>
              <Flex wrap='wrap' justify='flex-start' px={2} py={2}>
                {
                  img.tags.split(', ').map((tag)=>{
                    return <Tag mx={2} my={2}>#{tag}</Tag>
                  })
                }
              </Flex>
            </Box>
}
export default ImageCard;