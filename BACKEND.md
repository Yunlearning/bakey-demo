# user account

1. name
2. email
3. password
4. phone
5. address
6. role

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);
```

# 付款方式

1. 信用卡
2. 銀行轉帳
3. 貨到付款
4. line pay

```sql
CREATE TABLE payment_methods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- user_id INT,
    method VARCHAR(255) NOT NULL,
    -- FOREIGN KEY (user_id) REFERENCES users(id)
);
```

# 運輸方式

1. 宅配
2. 超商取貨

```sql
CREATE TABLE shipping_methods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    method VARCHAR(255) NOT NULL,
);

```

# user_payment 付款方式

```sql
CREATE TABLE user_payment (
    payment_id INT,
    user_id INT,
    credit_card_num VARCHAR(255) NOT NULL,
    credit_card_csv VARCHAR(255) NOT NULL,
    credit_card_date VARCHAR(255) NOT NULL,
    credit_card_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (payment_id),
    FOREIGN KEY (payment_id) REFERENCES user_payment(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

# user_shipping 運輸方式

```sql
CREATE TABLE user_shipping (
    shipping_id INT,
    user_id INT,
    address VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    PRIMARY KEY (shipping_id),
    FOREIGN KEY (shipping_id) REFERENCES user_shipping(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

# cart

```sql
CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE cart_items (
    cart_id INT,
    product_id INT,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (cart_id, product_id),
    FOREIGN KEY (cart_id) REFERENCES cart(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);
```

# orders

```sql
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    payment_id INT,
    shipping_id INT,
    total_price DECIMAL(10, 2) NOT NULL,
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (payment_id) REFERENCES user_payment(id),
    FOREIGN KEY (shipping_id) REFERENCES user_shipping(id)
);

```

# product

1. id
2. name
3. unit_price
4. cate_id
5. isPutOn
6. editor
7. create_date

```sql
CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    isPutOn BOOLEAN NOT NULL,
    editor VARCHAR(255) NOT NULL,
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    name VARCHAR(255) NOT NULL
    FOREIGN KEY (product_id) REFERENCES product(id)
);
```
