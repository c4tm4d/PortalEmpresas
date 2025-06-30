# Database Seed Scripts

This directory contains database seeding scripts for the City Finder application.

## Seed Script (`seed.post.ts`)

The main seed script reads data from `clients.csv` and populates the database with businesses and categories.

### CSV Field Mapping

The script maps CSV fields to database fields as follows:

| CSV Field | Database Field | Notes |
|-----------|----------------|-------|
| `post_id` | `id` | Used as the business ID |
| `post_title` | `name` | Business name |
| `post_url` | `logo` | Business logo/URL |
| `address` | `address` | Business address |
| `phone` | `phone` | Primary phone number |
| `fax` | `phone` | Fallback phone if main phone is empty |
| `email` | `email` | Business email |
| `website` | `website` | Business website |
| `contact_text` | `description` | Business description |
| `categories` | `categoryId` | Mapped to existing categories |
| `tags` | - | Not mapped (ignored) |

### Features

- **Automatic Category Mapping**: Attempts to map CSV categories to existing database categories
- **Address Parsing**: Extracts zip codes and city names from addresses when possible
- **Batch Processing**: Processes businesses in batches of 100 to avoid memory issues
- **Conflict Handling**: Uses `onConflictDoNothing()` to avoid duplicate entries
- **Default Values**: Provides sensible defaults for required fields
- **CSV Parsing**: Handles quoted fields and complex CSV formatting

### Usage

To run the seed script, make a POST request to `/api/tasks/seed`:

```bash
curl -X POST http://localhost:3000/api/tasks/seed
```

Or use the Nuxt dev server:

```bash
npm run dev
# Then visit: http://localhost:3000/api/tasks/seed
```

### Response

The script returns a JSON response with:

```json
{
  "status": "success",
  "message": "Seed completed successfully",
  "data": {
    "categoriesInserted": 24,
    "businessesInserted": 1176,
    "totalBusinessesProcessed": 1176
  }
}
```

### Categories

The script creates the following business categories:

- Alojamento
- Comida e Bebida
- Compras
- Arte e História
- Entretenimento
- Fitness e Desporto
- Vida Noturna
- Medicina
- Beleza
- Aluguer de Carros
- Serviços
- Construção
- Transportes
- Educação
- Agricultura
- Indústria
- Imobiliário
- Serviços Funerários
- Veículos
- Saúde
- Restaurantes
- Comércio
- Lazer

### Notes

- The script creates a default system admin user if none exists
- Businesses are assigned to categories based on the CSV `categories` field
- Address parsing attempts to extract zip codes and city names
- The script handles CSV files with quoted fields and complex formatting
- All businesses are assigned to a default user (system admin)
- Required fields have sensible defaults if CSV data is missing 