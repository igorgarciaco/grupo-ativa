import React from "react"

import "./style.css"

//icons
import { Icon, InlineIcon } from '@iconify/react';
import worldIcon from '@iconify/icons-whh/world';
import groupsIcon from '@iconify/icons-dashicons/groups';
import starOutlined from '@iconify/icons-ant-design/star-outlined';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';

import { Container, Row, Col } from "reactstrap"

const Statistics = () => {
    return (
        <>
            <section className="stats-section">
                <>
                    <Row noGutters>
                        <Col>
                            <div className="stats-col stats-col-bg-1">
                                <Icon icon={worldIcon} color="#ffffff" width="30" height="30" />
                                <h2 className="stats-number">548</h2>
                                <p className="stats-description text-uppercase">Processos realizados</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="stats-col stats-col-bg-2">
                                <Icon icon={groupsIcon} color="#ffffff" width="30" height="30" />
                                <h2 className="stats-number">1465</h2>
                                <p className="stats-description text-uppercase">working hours</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="stats-col stats-col-bg-3">
                                <Icon icon={starOutlined} color="#ffffff" width="30" height="30" />
                                <h2 className="stats-number">612</h2>
                                <p className="stats-description text-uppercase">positive feedbacks</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="stats-col stats-col-bg-4">
                                <Icon icon={heartOutlined} color="#ffffff" width="30" height="30" />
                                <h2 className="stats-number">735</h2>
                                <p className="stats-description text-uppercase">clientes satisfeitos</p>
                            </div>
                        </Col>
                    </Row>
                </>
            </section>
        </>
    )
}

export default Statistics