import json
import msgpack
from kafka import KafkaConsumer


def kafka(topic_name):
    # To consume latest messages and auto-commit offsets
    # topic_name = 'TOPICNAME'
    print('topic name : ' + topic_name)
    server_name = 'k7e205.p.ssafy.io:9092'
    consumer = KafkaConsumer(topic_name,
                             group_id='testgroup',
                             bootstrap_servers=[server_name])
    for message in consumer:
        # message value and key are raw bytes -- decode if necessary!
        # e.g., for unicode: `message.value.decode('utf-8')`
        print ("%s:%d:%d: key=%s value=%s" % (message.topic, message.partition,
                                              message.offset, message.key,
                                              message.value))

    # consume earliest available messages, don't commit offsets
    KafkaConsumer(auto_offset_reset='earliest', enable_auto_commit=False)

    # consume json messages
    KafkaConsumer(value_deserializer=lambda m: json.loads(m.decode('ascii')))

    # consume msgpack
    KafkaConsumer(value_deserializer=msgpack.unpackb)

    # StopIteration if no message after 1sec
    KafkaConsumer(consumer_timeout_ms=1000)

    # Subscribe to a regex topic pattern
    consumer = KafkaConsumer()
    consumer.subscribe(pattern='^awesome.*')


if __name__ == "__main__":
    kafka('TOPICNAME')  # topic_name

