# Expanded ERD

```mermaid
erDiagram
    PRODUCTS ||--o{ PRODUCT_LOCATIONS : has
    LOCATIONS ||--o{ PRODUCT_LOCATIONS : has
    PRODUCT_LOCATIONS }|..|{ PRODUCTS : references
    PRODUCT_LOCATIONS }|..|{ LOCATIONS : references

    EMPLOYEES ||--o{ EMPLOYEE_LOCATIONS : has
    LOCATIONS ||--o{ EMPLOYEE_LOCATIONS : has
    EMPLOYEE_LOCATIONS }|..|{ EMPLOYEES : references
    EMPLOYEE_LOCATIONS }|..|{ LOCATIONS : references

    CUSTOMERS ||--o{ ORDERS : has
    ORDERS }|..|{ CUSTOMERS : references

    CUSTOMERS ||--o{ PRODUCT_RATINGS : has
    PRODUCTS ||--o{ PRODUCT_RATINGS : has
    PRODUCT_RATINGS }|..|{ CUSTOMERS : references
    PRODUCT_RATINGS }|..|{ PRODUCTS : references

    CUSTOMERS ||--o{ LOCATION_RECOMMENDATIONS : has
    LOCATIONS ||--o{ LOCATION_RECOMMENDATIONS : has
    LOCATION_RECOMMENDATIONS }|..|{ CUSTOMERS : references
    LOCATION_RECOMMENDATIONS }|..|{ LOCATIONS : references
```

**Note**: The ERD assumes that each customer can have multiple credit card numbers stored, and that each product can have multiple ratings, coming from different customers. Additionally, each location can have multiple recommendations from different customers.