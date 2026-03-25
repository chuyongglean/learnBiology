import mysql.connector
import logging
import os

# --- Configuration ---
# In a real app, use environment variables for security.
DB_HOST = os.environ.get('DB_HOST', 'localhost')
DB_USER = os.environ.get('DB_USER', 'your_username')
DB_PASSWORD = os.environ.get('DB_PASSWORD', 'your_password')
DB_NAME = os.environ.get('DB_NAME', 'school_db')

# Configure logging for better debugging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def create_db_connection():
    """Creates and returns a database connection object."""
    connection = None
    try:
        connection = mysql.connector.connect(
            host=DB_HOST,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME
        )
        if connection.is_connected():
            logging.info("Python Database connection successful.")
    except mysql.connector.Error as e:
        logging.error(f"Error connecting to MySQL Database: {e}")
        # In a web framework, this might raise an exception to be caught by a middleware
        return None
    return connection

if __name__ == '__main__':
    # This block allows testing the connection directly
    logging.info("Testing database connection...")
    conn = create_db_connection()
    if conn:
        conn.close()
        logging.info("MySQL connection test successful and connection is closed.")
    else:
        logging.error("MySQL connection test failed.")
