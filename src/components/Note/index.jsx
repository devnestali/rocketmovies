import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Container } from "./styles";

export function Note({ ...rest }) {
    return (
        <Container {...rest}>
            <h3>Teste titulo 1</h3>
            <Rating 
                grade="4" 
                isBigSize={false}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptates nihil doloremque illum necessitatibus optio facere repellat impedit non molestias laboriosam magnam aliquid, animi libero quia voluptatum perspiciatis corporis at eum perferendis quo, ratione mollitia dolor. Pariatur et voluptas cumque voluptatem debitis commodi quisquam eaque fugit. Modi magni possimus, debitis dolor unde temporibus aspernatur ipsa a! Quam odio quibusdam facilis quod asperiores quisquam est dolor? Dolores, officia impedit aliquid distinctio non exercitationem ea nobis natus magni qui, doloribus assumenda tempore praesentium voluptatum culpa nulla eveniet nemo vitae rerum cupiditate. Quia quasi quidem voluptas nemo optio similique dolore autem recusandae rerum!</p>
            <footer>
                <Tag name="Tagteste1" />
                <Tag name="Tagteste2" />
                <Tag name="Tagteste2" />
            </footer>
        </Container>
    )
}