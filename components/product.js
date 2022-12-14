import useSWR from "swr";
import {
  Card,
  Grid,
  Row,
  Text,
  Checkbox,
  Input,
  useInput,
  Col,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Product() {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  const { value, reset, bindings } = useInput("");
  const [products, setProducts] = useState(data);
  const [isSortByPrice, setisSortByPrice] = useState(false);
  const [isSortByRating, setisSortByRating] = useState(false);
  const [isSortByAtoZ, setisSortByAtoZ] = useState(false);
  const [sortedData, setSortedData] = useState();
  const [isSearch, setIsSearch] = useState(false);
  const [inPutValue, setInputValue] = useState(value);

  const sortDataByPrice = useCallback(() => {
    if (!products) return;
    if (isSortByPrice) {
      const sortedData = products.sort(
        (firstItem, secondItem) => secondItem.price - firstItem.price
      );
      setSortedData(sortedData);
      return;
    }
    if (!isSortByPrice) {
      const sortedData = products.sort(
        (firstItem, secondItem) => firstItem.price - secondItem.price
      );
      setSortedData(sortedData);
      return;
    }
  }, [products, setSortedData, isSortByPrice]);

  const sortDataByRating = useCallback(() => {
    if (!products) return;
    if (!isSortByRating) {
      const sortedData = products.sort(
        (firstItem, secondItem) =>
          secondItem.rating.rate - firstItem.rating.rate
      );
      setSortedData(sortedData);
      return;
    }
    if (isSortByRating) {
      const sortedData = products.sort(
        (firstItem, secondItem) =>
          firstItem.rating.rate - secondItem.rating.rate
      );
      setSortedData(sortedData);
      return;
    }
  }, [products, setSortedData, isSortByRating]);

  const sortDataByAtoZ = useCallback(() => {
    if (!products) return;
    if (!isSortByAtoZ) {
      const sortedData = products.sort((firstItem, secondItem) =>
        firstItem.title.localeCompare(secondItem.title)
      );
      setSortedData(sortedData);
      return;
    }
    if (isSortByAtoZ) {
      const sortedData = products.sort((firstItem, secondItem) =>
        secondItem.title.localeCompare(firstItem.title)
      );
      setSortedData(sortedData);
      return;
    }
  }, [products, setSortedData, isSortByAtoZ]);

  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
    setIsSearch(!isSearch);
    setSortedData(handleSearch(products, e.target.value));
  };

  const handleSearch = (arr, searchKey) => {
    return arr.filter(
      (obj) =>
        Object.keys(obj).some((key) =>
          obj[key].toString().toLowerCase().includes(searchKey.toLowerCase())
        ) ||
        Object.values(obj).some((val) =>
          val.toString().toLowerCase().includes(searchKey.toLowerCase())
        )
    );
  };

  useEffect(() => {
    setProducts(data);
  }, [sortedData, data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}>
          <Checkbox.Group
            aria-labelledby="checkbox"
            orientation="horizontal"
            color="secondary"
            size="sm"
          >
            <Checkbox
              aria-labelledby="aToz"
              aria-label="Sort by A-Z"
              value="aToz"
              onChange={() => {
                setisSortByAtoZ(!isSortByAtoZ);
                sortDataByAtoZ();
              }}
            >
              A-Z
            </Checkbox>
            <Checkbox
              aria-labelledby="price"
              aria-label="Sort by price"
              value="price"
              onChange={() => {
                setisSortByPrice(!isSortByPrice);
                sortDataByPrice();
              }}
            >
              By price
            </Checkbox>
            <Checkbox
              aria-labelledby="rating"
              aria-label="Sort by rating"
              value="rate"
              onChange={() => {
                setisSortByRating(!isSortByRating);
                sortDataByRating();
              }}
            >
              By rating
            </Checkbox>
          </Checkbox.Group>
        </Grid>
        <Grid xs={6}>
          <Input
            aria-labelledby="search"
            aria-label="Search"
            placeholder="Search"
            clearable
            onClearClick={reset}
            fullWidth={true}
            {...bindings}
            value={value}
            onChange={handleInputOnChange}
          />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="flex-start">
        {isSortByPrice || isSortByRating || isSortByAtoZ || isSearch
          ? sortedData?.map((item, index) => (
              <Grid xs={6} sm={3} key={item.id}>
                <Card isPressable>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={item.image}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt={item.title}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Text b>{item.title}</Text>
                      <Col>
                        <Text
                          css={{
                            color: "$accents7",
                            fontWeight: "$semibold",
                            fontSize: "$md",
                          }}
                        >
                          ${item.price}
                        </Text>
                      </Col>
                      <Col>
                        <Text color="success" size="$xs">
                          Rating: {item.rating.rate}{" "}
                        </Text>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))
          : products?.map((item, index) => (
              <Grid xs={6} sm={3} key={item.id}>
                <Card isPressable>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={item.image}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt={item.title}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Text b>{item.title}</Text>
                      <Col>
                        <Text
                          css={{
                            color: "$accents7",
                            fontWeight: "$semibold",
                            fontSize: "$md",
                          }}
                        >
                          ${item.price}
                        </Text>
                      </Col>
                      <Col>
                        <Text color="success" size="$xs">
                          Rating: {item.rating.rate}
                        </Text>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
      </Grid.Container>
    </>
  );
}

export default Product;
